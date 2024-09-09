import React, {
  useEffect
} from 'react';

import {
  MapComponent,
  MapComponentProps
} from '@terrestris/react-geo/dist/Map/MapComponent/MapComponent';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import {
  useAppSelector
} from '../../hooks/useAppSelector';

import './index.less';

export const BasicMapComponent: React.FC<Partial<MapComponentProps>> = (props): JSX.Element => {
  const map = useMap();

  const isDrawerVisible = useAppSelector((state) => state.drawer.visible);

  useEffect(() => {
    if (isDrawerVisible) {
      document.querySelector('.ol-attribution')?.classList.add('drawer-open');
    } else {
      document.querySelector('.ol-attribution')?.classList.remove('drawer-open');
    }
  }, [isDrawerVisible]);

  if (!map) {
    return <></>;
  }

  return (
    <MapComponent
      map={map}
      {...props}
    />
  );
};

export default BasicMapComponent;
