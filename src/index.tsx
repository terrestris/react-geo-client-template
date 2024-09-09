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
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlView from 'ol/View';

import {
  apply as applyMapboxStyle
} from 'ol-mapbox-style';

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

    return await setupDefaultMap();
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

const setupDefaultMap = async () => {
  const basemapLayer = new OlLayerGroup({
    properties: {
      name: 'Basemap DE'
    }
  });

  await applyMapboxStyle(
    basemapLayer,
    'https://sgx.geodatenzentrum.de/gdz_basemapde_vektor/styles/bm_web_top.json'
  );

  basemapLayer.getLayersArray().forEach(l => {
    const mbLayers: string[] = l.get('mapbox-layers');

    if (mbLayers.includes('Hintergrund')) {
      l.set('name', 'Hintergrund');
    }

    if (mbLayers.includes('Schummerung_Col')) {
      l.set('name', 'Schummerung (Farbe)');
    }

    if (mbLayers.includes('Schummerung_Comb')) {
      l.set('name', 'Schummerung (Graustufen)');
    }

    if (mbLayers.includes('Hoehenlinie_1000er')) {
      l.set('name', 'Höhenlinien');
    }

    if (mbLayers.includes('ReliefF_Duene')) {
      l.set('name', 'Overlays');
    }
  });

  const topPlusOpenLayer = new OlLayerTile({
    properties: {
      name: 'TopPlusOpen Light'
    },
    source: new OlSourceTileWMS({
      url: 'https://sgx.geodatenzentrum.de/wms_topplus_open',
      params: {
        LAYERS: 'web_light'
      },
      attributions: [
        'Kartendarstellung und Präsentationsgraphiken: © <a href="https://www.bkg.bund.de/">' +
        `Bundesamt für Kartographie und Geodäsie</a> (${new Date().getFullYear()}), ` +
        '<a href="https://sgx.geodatenzentrum.de/web_public/gdz/datenquellen/Datenquellen_TopPlusOpen.html">' +
        'Datenquellen</a>'
      ]
    })
  });

  const map = new OlMap({
    view: new OlView({
      center: fromLonLat([10, 51.5], 'EPSG:3857'),
      zoom: 6,
      constrainResolution: true
    }),
    layers: [
      topPlusOpenLayer,
      basemapLayer
    ],
    controls: OlControlDefaults({
      zoom: false
    })
  });

  return map;
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
