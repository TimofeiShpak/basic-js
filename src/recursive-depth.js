module.exports = class DepthCalculator {
    calculateDepth(arr,a=1,array=[]) {
    	array.push(a);
    	for(let i = 0; i<arr.length; i++){
    		if(Array.isArray(arr[i]))this.calculateDepth(arr[i],a+1,array); 
    	}
    	let value = 0;
        for (let j = 0; j < array.length; j++) {
            value = Math.max(value,array[j]);
        }
        return value;    
    }
};


  
