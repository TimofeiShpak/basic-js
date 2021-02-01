const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(number) {
  if (typeof number !== 'string' || !isFinite(number) || +number <= 0 || number > 15) {
    return false;
  }
  let coef = 0.693 / HALF_LIFE_PERIOD;
  return Math.log(MODERN_ACTIVITY / number) / coef;
};
