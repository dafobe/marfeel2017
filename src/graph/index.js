require('./assets/styles.less');
import {default as Chart, DonutChart} from './models/chart';

const init = () => {
	
	const chart = new Chart(200, 200, 'graph-container');
	chart.height = 100;
	console.log(chart.print(), chart.startup());

	const donutChart = new DonutChart(333, 333, 'graph-container', 50, 20);
	donutChart.height = 444;
	console.log(donutChart.print());
}

export {init};