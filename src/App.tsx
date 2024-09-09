import React from 'react';

import BasicMapComponent from './components/BasicMapComponent';
import BasicNominatimSearch from './components/BasicNominatimSearch';
import SideDrawer from './components/SideDrawer';
import ToggleDrawerButton from './components/ToggleDrawerButton';

import {
  useAppSelector
} from './hooks/useAppSelector';

import './App.less';

export const App: React.FC = (): JSX.Element => {
  const isDrawerVisible = useAppSelector((state) => state.drawer.visible);

  return (
    <div className="App">
      <BasicMapComponent />
      <div
        className={`map-controls ${isDrawerVisible && 'drawer-open'}`}
      >
        <BasicNominatimSearch />
        <ToggleDrawerButton />
      </div>
      <SideDrawer />
    </div>
  );
};

export default App;
