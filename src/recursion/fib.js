const expect = require("expect");
// iterative approach
function fib(n) {
    var fib = [0, 1], ind = 2, num = 0;
    while (num < n) {
        num = fib[ind - 2] + fib[ind - 1];
        fib.push(num);
        ind++;
    }
    return fib;
}

// recursive approach
function fibR(n, arr = [0, 1]) {
    let num = arr[arr.length - 2] + arr[arr.length - 1];
    if (n < num) return arr;
    return fibR(n, [...arr, num]);
}

expect(fib(2)).toEqual([0, 1, 1, 2]);
expect(fibR(2)).toEqual([0, 1, 1, 2]);