/**
 * Coin change problem
 * Coin change problem can be solved with greedy approach.
 * Minimum no of coins required to make up certain amount with given denominations.
 * Consider we have infinite supply for each of denomination [1,2,5,10,20,50].
 * 
 * But this approach would not yield optimal solution every time
 * as in case when we have 9,6,5,1 denomination and 
 * we would want min no of coins to make up the amount 11
 * with following approach it would yield 9,1,1 where it should have given 6,5.
 * 
 * To have optimal result every time for this problem we would want to use dynamic programming approach
 * where we would look in every possible solution and get best out of all.
 */

const den = [1,2,5,10,20,50];
module.exports = function coinChange(n){
    let result = [];
    let j = den.length-1;
    while(j>=0){
        if(n >= den[j]){
            n -= den[j];
            result.push(den[j]);
        }
        if(n < den[j]) j--;
    }
    return result;
}