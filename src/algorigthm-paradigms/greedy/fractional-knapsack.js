const quickSort = require('../../sorting/quick');
/**
 * Fractional Knapsack
 * Given weights and values of n items,
 * we need to put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
 */

module.exports = function knapsack(arr, w) {
    let result = 0;
    //sort all items by their ratio to the value/weight
    arr = arr.sort((a, b) => {
        let r1 = a.value / a.weight;
        let r2 = b.value / b.weight;
        return r2 - r1;
    });
    //keep adding to the last item or capacity reached
    let j = 0;
    while (j < arr.length && w > 0) {
        if (w > arr[j].weight) {
            w -= arr[j].weight;
            result += arr[j].value;
        } else {
            if (w > 0) {
                let fraction = w / arr[j].weight; // percent formula part over whole
                let slice = fraction * arr[j].value; // fractional value into value would give us percent share from value
                w = 0; //subtracting slice from w would not always give precise value of 0 with javascript and hence.
                result += slice;
            }
        }
        j++;
    }
    return result;
}