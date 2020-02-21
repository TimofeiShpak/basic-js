module.exports = function getSeason(date) {
  if (!date) 
    return 'Unable to determine the time of year!'
  else if (Object.keys(date).length > 0) {
    throw new Error();
  }
	let value = date.getMonth();
	if(value==11 || value ==0 || value == 1)return 'winter';
	else if(value==2 || value ==3 || value == 4)return 'spring';
	else if(value==5 || value ==6 || value == 7)return 'summer';
	else if(value==8 || value ==9 || value == 10)return 'autumn';


};
