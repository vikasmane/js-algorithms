const maxSubArray = require('./maxsubarray');
test('Maximum SubArray', () => {
    expect(maxSubArray([15, -68, 37, 36, -75, 69, 55, -56])).toEqual([69, 55]);
});
const kadanes = require('./kadanes');
test('Max Sub Array with Kadane\'s algorithm', () => {
    expect(kadanes([15, -68, 37, 36, -75, 69, 55, -56])).toEqual(125);
})
const getPrimeNumbers = require('./eratosthenes');
test('Sieves of Eratosthenes', ()=>{
    expect(getPrimeNumbers(15)).toEqual([2,3,5,7,11,13]);
})