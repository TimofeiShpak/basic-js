

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if(typeof(sampleActivity) == 'string'){sampleActivity = parseFloat(sampleActivity); if(isFinite(sampleActivity))  {
	if(+sampleActivity > 15 || +sampleActivity<=0) return false;
	let years = Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD)
	years = Math.ceil(years) 
	return years;}
	}
	return false;
};
