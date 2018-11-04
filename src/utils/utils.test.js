const {swap} = require('./index');

test('Swap values of Two Distinct indices of an Array', () => {
    let a = [1,2,3];
    swap(a, 0, 2);
    expect(a).toEqual([3,2,1]);
});