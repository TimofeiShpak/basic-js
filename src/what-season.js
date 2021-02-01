const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  else if (Object.keys(date).length)  throw new Error(); 
  let month = date.getMonth();
  let result;
  switch (true) {
    case month > 1 && month < 5: result = 'spring';
    break;
    case month > 4 && month < 8: result = 'summer';
    break;
    case month > 7 && month < 11: result = 'autumn';
    break;
    case month === 11 || month === 0 || month === 1: result = 'winter';
    break;
  }
  return result;
};
