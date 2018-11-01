// Insertion Sort
// Insertion sort is in place sorting algorithm with worst case time complexity of (O(n^2))
// Insertion sort is pretty efficient with space complexity.
function insertionSort(arr){
    // iterate over an array to the length
    for(let i=1; i<arr.length; i++){
        // take i th element
        let el = arr[i];
        // try to push it to the left of an array
        let j = i - 1; 
        while(j >= 0){
            //pushing greator values to the right of the array
            if(arr[j] > el) arr[j+1] = arr[j];
            else arr[j+1] = el; break;

            if(j == 0) arr[j] = el;      

            j--;
        }
    }
    return arr;
}
console.log(insertionSort([185,21,5,51,1514,25,2]));