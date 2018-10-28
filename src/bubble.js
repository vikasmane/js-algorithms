var {swap} = require('./utils');

// Bubble sort is in place sorting algorithm 
// Bubble sort would sort list with worst case time complexity of (O(n^2)).
// Bubble sort's space complexity is O(1).
function bubbleSort(arr){
    // iterate over an array to its length
    for(let i=0; i<arr.length; i++){
        // iterate over an array from 1 to length - i
        for(let j=0; j<arr.length-i; j++){
            if(arr[j]>arr[j+1]) swap(arr, j, j+1);
        }
    }
    return arr;
}


console.log(bubbleSort([56,65,26,5,6,32,8,97,23,36]));