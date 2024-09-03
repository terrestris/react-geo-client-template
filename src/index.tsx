import React from 'react';

import {
  Alert,
  notification
} from 'antd';

import ConfigProvider from 'antd/lib/config-provider';
import deDE from 'antd/lib/locale/de_DE';
import enGB from 'antd/lib/locale/en_GB';

import {
  defaults as OlControlDefaults
} from 'ol/control';
import OlLayerGroup from 'ol/layer/Group';
import OlLayerTile from 'ol/layer/Tile';
import OlMap from 'ol/Map';
import {
  fromLonLat
} from 'ol/proj';
import OlSourceOsm from 'ol/source/OSM';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlView from 'ol/View';
import {
  createRoot
} from 'react-dom/client';
import {
  Provider
} from 'react-redux';

import Logger from '@terrestris/base-util/dist/Logger';
import {
  UrlUtil
} from '@terrestris/base-util/dist/UrlUtil/UrlUtil';

import MapContext from '@terrestris/react-util/dist/Context/MapContext/MapContext';

import SHOGunApplicationUtil from '@terrestris/shogun-util/dist/parser/SHOGunApplicationUtil';

import SHOGunAPIClient from '@terrestris/shogun-util/dist/service/SHOGunAPIClient';

import App from './App';
import i18n from './i18n';
import {
  store
} from './store/store';

import './index.less';

const getConfigLang = (lang: string) => {
  switch (lang) {
    case 'en':
      return enGB;
    case 'de':
      return deDE;
    default:
      return enGB;
  }
};

const setupMap = async () => {
  const applicationId = UrlUtil.getQueryParam(window.location.href, 'applicationId');

  if (applicationId) {
    Logger.info(`Loading application with ID ${applicationId}`);

    return await setupSHOGunMap(parseInt(applicationId, 10));
  }

  Logger.info('No application ID given, will load the default map configuration.');

  return setupDefaultMap();
};

const setupSHOGunMap = async (applicationId: number) => {
  const client = new SHOGunAPIClient({
    url: '/api/'
  });
  const parser = new SHOGunApplicationUtil({
    client
  });

  let application;
  try {
    application = await client.application().findOne(applicationId);
  } catch (error) {
    Logger.error(`Error while loading application with ID ${applicationId}: ${error}`);
    Logger.info('Loading the default map configuration.');

    notification.error({
      message: i18n.t('Index.applicationLoadErrorMessage'),
      description: i18n.t('Index.applicationLoadErrorDescription', {
        applicationId: applicationId
      }),
      duration: 0
    });

    return setupDefaultMap();
  }

  const view = await parser.parseMapView(application);
  const layers = await parser.parseLayerTree(application);

  return new OlMap({
    view,
    layers,
    controls: OlControlDefaults({
      zoom: false
    })
  });
};

const setupDefaultMap = () => {
  const osmLayer = new OlLayerTile({
    source: new OlSourceOsm()
  });
  osmLayer.set('name', 'OpenStreetMap');

  const temperatureDayLayer = new OlLayerTile({
    opacity: 0.5,
    source: new OlSourceTileWMS({
      url: 'https://neo.gsfc.nasa.gov/wms/wms',
      projection: 'CRS:84',
      params: {
        LAYERS: 'MOD_LSTD_CLIM_M'
      }
    })
  });
  temperatureDayLayer.set('name', 'Average Land Surface Temperature (Day)');

  const temperatureNightLayer = new OlLayerTile({
    opacity: 0.5,
    visible: false,
    source: new OlSourceTileWMS({
      url: 'https://neo.gsfc.nasa.gov/wms/wms',
      projection: 'CRS:84',
      params: {
        LAYERS: 'MOD_LSTN_CLIM_M'
      }
    })
  });
  temperatureNightLayer.set('name', 'Average Land Surface Temperature (Night)');

  const eoLayerGroup = new OlLayerGroup({
    layers: [temperatureDayLayer, temperatureNightLayer]
  });
  eoLayerGroup.set('name', 'NASA Earth Observations');

  const backgroundLayerGroup = new OlLayerGroup({
    layers: [osmLayer]
  });
  backgroundLayerGroup.set('name', 'Background');

  const center = fromLonLat([0, 40], 'EPSG:3857');

  return new OlMap({
    view: new OlView({
      center: center,
      zoom: 0
    }),
    layers: [backgroundLayerGroup, eoLayerGroup],
    controls: OlControlDefaults({
      zoom: false
    })
  });
};

const renderApp = async () => {
  const container = document.getElementById('app');

  if (!container) {
    Logger.error('Could not find container element with ID "app"');
    return;
  }

  const root = createRoot(container);

  try {
    const map = await setupMap();

    root.render(
      <React.StrictMode>
        <React.Suspense fallback={<span></span>}>
          <ConfigProvider locale={getConfigLang(i18n.language)}>
            <Provider store={store}>
              <MapContext.Provider value={map}>
                <App />
              </MapContext.Provider>
            </Provider>
          </ConfigProvider>
        </React.Suspense>
      </React.StrictMode>
    );
  } catch (error) {
    Logger.error(error);

    root.render(
      <React.StrictMode>
        <Alert
          className="error-boundary"
          message={i18n.t('Index.errorMessage')}
          description={i18n.t('Index.errorDescription')}
          type="error"
          showIcon
        />
      </React.StrictMode>
    );
  }
};

renderApp();
