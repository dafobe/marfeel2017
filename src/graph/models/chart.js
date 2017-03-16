import * as d3 from 'd3';
import {default as creationFactory} from '../services/graphCreationFactory';

const pieCreationStrategy = creationFactory('pie');
const donutCreationStrategy = creationFactory('pie');
const areaCreationStrategy = creationFactory('area');

const extractValue = (data) => data.value;

export default class Chart {
  constructor (options, creationStrategy = areaCreationStrategy) {
    console.log(`Chart constructor`);
    this.width = options.width;
    this.height = options.height;
    this.domContainer = options.domContainer;
    this.title = options.title;
    this.description = options.description;
    this._svgContainer;
    this._chartStrategy = creationStrategy;

    this._buildChart = creationStrategy.build(options);
  }

  print() {
    return `Printing Chart: w: ${this.width}, h: ${this.height}`;
  }
  
  _buildContainer() {
    this._svgContainer = d3.select(`#${this.domContainer}`)
                          .append('svg')
                          .attr('width', this.width)
                          .attr('height', this.height)
                          .node();
    
    return this._svgContainer;
  }
  
   _startup() { }

   _buildChart() { }

  init(){
    let container = this._buildContainer();
    this._buildChart(container);
    this._startup();
  }
}

export class PieChart extends Chart {
    constructor(options, creationStrategy = pieCreationStrategy) {
        super(options, creationStrategy);
        this.radius = options.radius;
        this.arc;
        this.path;
    }
    
    print(){
      return super.print() + ` radius: ${this.radius}`;
    }
}

export class DonutChart extends PieChart {
    constructor(options, creationStrategy = donutCreationStrategy) {
        super(options, creationStrategy);
        this.innerRadius = options.innerRadius;
    }

    startup() { }

    print(){
      return super.print() + ` innerRadius: ${this.innerRadius}`;
    }
}