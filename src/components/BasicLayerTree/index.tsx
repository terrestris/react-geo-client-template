import React from 'react';

import OlLayerBase from 'ol/layer/Base';
import OlLayerVector from 'ol/layer/Vector';

import LayerTree, {
  LayerTreeProps
} from '@terrestris/react-geo/dist/LayerTree/LayerTree';

export const BasicLayerTree: React.FC<Partial<LayerTreeProps>> = (
  props
): JSX.Element => {

  return (
    <LayerTree
      filterFunction={(layer: OlLayerBase) => !(layer instanceof OlLayerVector)}
      {...props}
    />
  );
};

export default BasicLayerTree;
