import React from 'react';

import {
  faBars
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  useTranslation
} from 'react-i18next';

import {
  ToggleButton,
  ToggleButtonProps
} from '@terrestris/react-geo/dist/Button/ToggleButton/ToggleButton';

import {
  useAppDispatch
} from '../../hooks/useAppDispatch';
import {
  useAppSelector
} from '../../hooks/useAppSelector';
import {
  toggleVisibility
} from '../../store/drawer';

export const ToggleDrawerButton: React.FC<Partial<ToggleButtonProps>> = (
  ...passThroughProps
): JSX.Element => {
  const isDrawerVisible = useAppSelector((state) => state.drawer.visible);

  const dispatch = useAppDispatch();

  const {
    t
  } = useTranslation();

  const toggleDrawer = () => {
    dispatch(toggleVisibility());
  };

  const icon = (
    <FontAwesomeIcon
      icon={faBars}
    />
  );

  return (
    <ToggleButton
      pressed={isDrawerVisible}
      className="toggle-drawer-button"
      onClick={toggleDrawer}
      icon={icon}
      pressedIcon={icon}
      tooltip={t('ToggleDrawerButton.tooltip')}
      {...passThroughProps}
    />
  );
};

export default ToggleDrawerButton;
