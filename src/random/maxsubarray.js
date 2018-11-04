module.exports = function maxSubArray(arr){
    let startInd = 0;
    let endInd = arr.length - 1;
    let currSum = -Infinity;
    let maxSum = 0;
    let currentStart = 0;
    arr.forEach((el, i) => {
        currSum += el;
        if(currSum > maxSum){
            maxSum = currSum;
            startInd = currentStart;
            endInd = i;
        }

        if(currSum < 0){
            currSum = 0;
            currentStart = i + 1;
        }
    });
    return arr.slice(startInd, endInd+1);
}