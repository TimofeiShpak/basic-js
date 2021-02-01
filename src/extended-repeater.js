const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  let result = '';
  for (let i = 0; i < (repeatTimes || 1); i++) {
    result += str;
    for (let j = 0; j < (additionRepeatTimes || 1); j++) {
      if (addition !== undefined) {
        result += addition;
      }
      if (additionSeparator && additionRepeatTimes && j !== additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }
    if (repeatTimes && i !== repeatTimes - 1) {
      result += separator || '+';
    }
  }
  return result;
};
  