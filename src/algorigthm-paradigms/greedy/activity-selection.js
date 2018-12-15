//Problem Statement
//You are given n activities with their start and finish times. 
//Select the maximum number of activities that can be performed by a single person, 
//assuming that a person can only work on a single activity at a time.

module.exports = function activitySelection(arr) {
    let result = [];
    //sort the array by thier finishing time 
    arr = arr.sort(([, finish], [, finish1]) => {
        return finish - finish1;
    });

    let j = 0, time = 0;
    while (j < arr.length) {
        if (arr[j][0] < arr[j][1] && time <= arr[j][0]) {
            time = arr[j][1];
            result.push(j);
        }
        j++;
    }
    return result;
}