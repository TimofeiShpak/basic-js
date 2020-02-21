module.exports = class DepthCalculator {
    calculateDepth(arr) {
    	if(Array.isArray(arr))return 1;
    	return 0;
    }
};