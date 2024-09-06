import React from 'react';

import OlLayerBase from 'ol/layer/Base';
import OlLayerVector from 'ol/layer/Vector';

import LayerTree, {
  LayerTreeProps
} from '@terrestris/react-geo/dist/LayerTree/LayerTree';

export const BasicLayerTree: React.FC<Partial<LayerTreeProps>> = (
  props
): JSX.Element => {

  const filterFunction = (layer: OlLayerBase) => {
    if (layer instanceof OlLayerVector) {
      return false;
    }

    return true;
  };

  return (
    <LayerTree
      filterFunction={filterFunction}
      {...props}
    />
  );
};

export default BasicLayerTree;
