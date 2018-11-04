const {fib, fibR} = require('./fib');

test('Fibonocci Series Iterative', () => {
    expect(fib(2)).toEqual([0, 1, 1, 2]);
})

test('Fibonocci Series Recursive', () => {
    expect(fibR(2)).toEqual([0, 1, 1, 2]);
})

const gcd = require('./gcd');

test('Euclidean\'s Algorithm', ()=>{
    expect(gcd(45, 30)).toEqual(15);
});