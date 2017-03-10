if (module.hot) {
  module.hot.accept()
}

import * as d3 from 'd3';
import Layout from './layout';
import * as GraphComponent from './graph';
import * as GalleryComponent from './gallery';

const name = `Marfeel`;

console.log(`application ${name} entrypoint`);

GraphComponent.init();