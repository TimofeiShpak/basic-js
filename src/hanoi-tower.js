module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
	let value = 3;
	for( let i =2; i<disksNumber; i++){
		value = 2*value+1;
	}
	let valueTime = value/(turnsSpeed/3600);
	let game = {
		turns : value,
		seconds: valueTime
	}
	return game;

}