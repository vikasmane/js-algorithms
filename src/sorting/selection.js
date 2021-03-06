var { swap } = require('./../utils');

//Selection sort
module.exports = function selection(arr) {
    //iterate over an array to its length
    for (let i = 0; i < arr.length; i++) {
        // select the first ele index as minIndex
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }

            if (j == arr.length - 1) {
                swap(arr, i, minIndex);
            }
        }
    }
    return arr;
}