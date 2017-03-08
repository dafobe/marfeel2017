if (module.hot) {
  module.hot.accept()
}

require('./layout/styles.less')

import * as d3 from 'd3';

const name = `Marfeel`;

console.log(`application ${name} entrypoint`);