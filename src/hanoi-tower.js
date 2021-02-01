const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let number = 3;
  for (let i = 2; i < disksNumber; i++) {
    number = 2 * number + 1;
  }
  time = Math.trunc(number / turnsSpeed * 3600);
  return {turns : number, seconds : time}
};
