import {default as strategy} from './createionStrategies';

export default function (type /*<String> Graph Type*/){
	
	switch(type){
		case 'pie'	: 	return strategy.PieChart;
						break;
		case 'area'	: 
		default		: 	return strategy.AreaChart;
						break;
	}
}