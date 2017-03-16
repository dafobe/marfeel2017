import * as d3 from 'd3';
/**
 Return d3 Selection
*/
const addShapeContainer = (svg, width, height) => d3.select(svg).append(`g`).attr(`transform`, `translate(${width / 2},${height / 2})`).node();                                           

const createShapes = (container, data = [], dataBuilder = shapeDatasetBuilder) => d3.select(container)
                                                                                  .selectAll('path')
                                                                                  .data(dataBuilder()(data))
                                                                                  .enter()
                                                                                  .append('path').nodes();

const shapeDatasetBuilder = (dataExtractor = extractValue, sortingStrategy = null) =>  d3.pie()
                                                                                        .value(dataExtractor)
                                                                                        .sort(sortingStrategy);

const extractValue = (item) => item.value;
                                                                             
const configureShape = (shape, options, generator = shapeGenerator) => d3.select(shape).attr('d', generator(options)).node();

const shapeGenerator = (options = {innerRadius: 0}) => d3.arc().innerRadius(options.innerRadius).outerRadius(options.radius);

const configureShapesStyles = (shape, options, colors = colorGenerator) => d3.select(shape).attr('fill', colorGenerator).node();

const colorPalette = () => d3.schemeCategory20;

const colorGenerator = (d, i, palette = colorPalette) => colorPalette()[d.index];

const build = (options = {}) => (svg, dataset = [{value: 1}, { value: 1}]) => {
 
  const shapeContainer = addShapeContainer(svg, options.width, options.height);
   
  const shapes = createShapes(shapeContainer, dataset);
   
  shapes.map((shape) => configureShape(shape, options))
        .map((shape) => configureShapesStyles(shape, options));

  return shapeContainer;
}


export default {build};