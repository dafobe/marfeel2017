import {PieStrategy, AreaStrategy} from './creationStrategies';

export default function (type /*<String> Graph Type*/){
	
	switch(type){
		case 'pie'	: 	return PieStrategy;
						break;
		case 'area'	: 
		default		: 	return AreaStrategy;
						break;
	}
}