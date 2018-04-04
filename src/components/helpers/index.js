import _ from 'lodash';

export const sumNumbers = (item,state) => {
	const adaptiveRedesignTime = [];
	const adaptiveTime=[];
	const redesignTime=[];
	const estimatedTime = _.map(state[item],(obj)=>{
		const numberHours=Number(obj.estimated_time);
		if(obj.type==='redesign_adaptive'){
			adaptiveRedesignTime.push(numberHours);
		}
		if(obj.type==='redesign'){
			redesignTime.push(numberHours);
		}
		if(obj.type==='adaptive'){
			adaptiveTime.push(numberHours);
		}
		return numberHours;
	});
	return {
		adaptiveRedesignTime,
		adaptiveTime,
		redesignTime,
		estimatedTime,
		closeTasks: state[item].length
	}
};

export const reduceNumber = (numbers) => {
	return _.reduce(numbers,(a,b)=>{
		return a+b;
	},0).toFixed(2);
};