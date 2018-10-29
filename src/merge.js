//Merge sort
// Merge sort Divide and Conquer sorting algorithm
// Merge sort gives worst case time complexity of O(nlogn)
// But ineffiecient in space complexity

function mergeSort(arr){
    var start = 0, end = arr.length;
    var mid = Math.floor(arr.length / 2 );
    if(mid !== start){
        var left = mergeSort(arr.slice(start, mid));
        var right = mergeSort(arr.slice(mid, end));
        return merge(left, right);
    }
    return arr;
}

function merge(left, right){
    var len1 = left.length;
    var len2 = right.length;
    var result = [];
    while(len1 && len2){
        if(left[0] < right[0]){
            result.push(left.shift());
            len1--;
        }else{
            result.push(right.shift());
            len2--;
        }
    }
    if(len1 == 0 && len2 > 0) result.push.apply(result, right);
    if(len2 == 0 && len1 > 0) result.push.apply(result, left);

    return result;
}

console.log(mergeSort([52,65,92,3,54,12,22,3]));