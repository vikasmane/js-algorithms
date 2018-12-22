/**
 * Kadane's Algorithm
 * To find out maximum sub array we can use kadane's algorithm
 */

module.exports = function findMaxSubArray(arr){
    let max_ending = 0, max_slice = 0;
    for(let i of arr){
        max_ending = Math.max(0, max_ending + i);
        max_slice = Math.max(max_ending, max_slice);
    }
    return max_slice;
};