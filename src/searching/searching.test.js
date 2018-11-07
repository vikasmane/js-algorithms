const binarySearch = require('./binary');

test('Binary Search', ()=>{
    expect(binarySearch([2, 8, 24, 43, 45, 67, 76, 78, 98], 43)).toEqual(3);
});