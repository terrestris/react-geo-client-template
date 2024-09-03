import React, {
  useMemo
} from 'react';

import {
  Geometry
} from 'geojson';

import {
  useTranslation
} from 'react-i18next';

import {
  SearchField,
  SearchProps as SearchFieldProps
} from '@terrestris/react-geo/dist/Field/SearchField/SearchField';
import {
  createNominatimSearchFunction,
  createNominatimGetValueFunction,
  createNominatimGetExtentFunction,
  NominatimPlace
} from '@terrestris/react-util/dist/Hooks/search/createNominatimSearchFunction';
import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import './index.less';

export type BasicNominatimSearchProps = React.FC<Partial<SearchFieldProps<Geometry, NominatimPlace>>>;

export const BasicNominatimSearch: BasicNominatimSearchProps = (props): JSX.Element => {
  const map = useMap();
  const {
    t
  } = useTranslation();
  const nominatimSearchFunction = useMemo(() => createNominatimSearchFunction({
    nominatimBaseUrl: 'https://nominatim.terrestris.de/search',
    countryCodes: ''
  }), []);
  const nominatimGetValue = useMemo(() => createNominatimGetValueFunction(), []);
  const nominatimGetExtent = useMemo(() => createNominatimGetExtentFunction(), []);

  if (!map) {
    return <></>;
  }

  return (
    <SearchField
      searchFunction={nominatimSearchFunction}
      getValue={nominatimGetValue}
      getExtent={nominatimGetExtent}
      allowClear={true}
      placeholder={t('Nominatim.placeholder')}
      {...props}
    />
  );
};

export default BasicNominatimSearch;
