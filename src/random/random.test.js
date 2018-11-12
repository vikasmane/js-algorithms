const maxSubArray = require('./maxsubarray');
test('Maximum SubArray', () => {
    expect(maxSubArray([15, -68, 37, 36, -75, 69, 55, -56])).toEqual([69, 55]);
});

const getPrimeNumbers = require('./eratosthenes');
test('Sieves of Eratosthenes', ()=>{
    expect(getPrimeNumbers(15)).toEqual([2,3,5,7,11,13]);
})