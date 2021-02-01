const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, len = 1, result = []) {
    result.push(len);
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let currentArr = arr[i];
        this.calculateDepth(currentArr, len + 1, result);
      }
    }
    return Math.max(...result);
  }
};