import '@testing-library/jest-dom';

import {
  TextDecoder,
  TextEncoder
} from 'util';

Object.assign(global, {
  TextDecoder,
  TextEncoder
});

// https://react.i18next.com/misc/testing
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {})
      }
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {}
  }
}));
