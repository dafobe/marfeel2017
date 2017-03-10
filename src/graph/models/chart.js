import * as d3 from 'd3';

const extractValue = (data) => data.value;

export default class Chart {
  constructor (width, height, domContainer, title, description) {
    console.log(`Chart constructor`);
    this.width = width;
    this.height = height;
    this.domContainer = domContainer;
    this.title = title;
    this.description = description;
    this._svgContainer;
    this._chartStrategy;
  }

  print() {
    return `Printing Chart: w: ${this.width}, h: ${this.height}`;
  }
  _buildContainer() {
    this._svgContainer = d3.select(domContainer)
                          .append('svg')
                          .attr('width', this.width)
                          .attr('height', this.height);
  }
  _buildChart() {
    
  }

  _startup() {
    
  }

  init(){
    this._buildContainer();
    this._buildChart();
    this._startup();
  }
}

export class PieChart extends Chart {
    constructor(width, height, domContainer, radius) {
        super(width, height, domContainer);
        this.radius = radius;
        this.arc;
        this.path;
    }
    
    _buildArc() {
      this.arc = d3.arc()
                .innerRadius(0)
                .outerRadius(this.radius);
    }

    _buildChartStrategy() {

    }

    _buildChart() {
    
    }

    print(){
      return super.print() + ` radius: ${this.radius}`;
    }
}

export class DonutChart extends PieChart {
    constructor(width, height, domContainer, radius, innerRadius) {
        super(width, height, domContainer, radius);
        this.innerRadius = innerRadius;
    }

    startup() {
      return d3.select('#chart')
              .append('svg')
              .attr('width', this.width)
              .attr('height', this.height)
              .append('g')
              .attr('transform', 'translate(' + (this.width / 2) +  ',' + (this.height / 2) + ')');
    }

    print(){
      return super.print() + ` innerRadius: ${this.innerRadius}`;
    }
}