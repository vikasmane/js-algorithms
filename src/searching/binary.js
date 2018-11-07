// Binary Search
// Binary search works on divide and conquer mechanics
// Binary search works in worst case running time complexity of O(logn)
let binarySearch;
module.exports = binarySearch = (arr, val) => {
    let start = 0, end = arr.length-1;
    //take start and end and compute mid
    let mid = Math.floor((start + end) / 2);

    //if val under mid is what we are looking for return it
    //else while val under mid is larger than val, take left side of mid for searching
    //or else take right side of the mid for searching
    while(arr[mid]!=val && start <= end){
        if(arr[mid]>val){
            end = mid-1;
        }else if(arr[mid]<val){
            start = mid+1;
        }
        mid = Math.floor((start + end) / 2);
    }

    if(arr[mid] === val) return mid;
    
    //if dont find an val in the list return -1
    return -1;
};