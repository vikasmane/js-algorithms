var { swap } = require('./../utils');
// Quick sort 
// Quick Sort in place sorting algorithm with worst case time complexity of O(nlogn)
// Divide and Conquer sorting algorithm

module.exports = function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        var pivot = findPivot(arr, left, right);

        quickSort(arr, left, pivot);
        quickSort(arr, pivot + 1, right);
    }
}

function findPivot(arr, left, right) {
    var min = arr[left];
    var swapCounter = left;
    for (var i = left + 1; i <= right; i++) {
        if (min > arr[i]) {
            swap(arr, ++swapCounter, i);
        }
    }
    swap(arr, swapCounter, left);

    return swapCounter;
}