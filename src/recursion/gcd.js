const expect = require("expect");

//Euclidean's Algorithm to find out 
//greatest common divisor of two different numbers
function gcd(n1, n2){
    if(n2 == 0) return n1;
    return gcd(Math.min(n1, n2), n1%n2);
}

expect(gcd(45, 30)).toEqual(15);