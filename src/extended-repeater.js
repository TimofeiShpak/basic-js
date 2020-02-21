module.exports = function repeater(str, options) {
	let key = 'repeatTimes';
	let key2 = 'separator';
	let key3 = 'addition';
	let key4 = 'additionRepeatTimes';
	let key5 = 'additionSeparator';
	let addition = '';
	let separator = '';
	let additionValue = 1;
	let additionSeparator = '';
	if(options[key2]!='+' && options[key2]!== undefined){separator=options[key2];}
	else {separator='+';}
	if(options[key3]!== undefined){ addition = options[key3];}
	if(options[key4]!== undefined){ additionValue = options[key4];}
	if(options[key5]!== undefined){ additionSeparator = options[key5];}
	let value=1;
	if(options[key]!== undefined) value = options[key];
	let repeat = '';
	for(let i=0; i<value;i++){
		repeat+=str;
		if(options[key3]!== undefined){
			for(let j = 0; j<additionValue; j++){
			repeat+= addition;
			if(options[key4] !== undefined && j<(additionValue-1))repeat+= additionSeparator;}
		}
		if(i<value-1)repeat+=separator;
	}
	return repeat;
};
  