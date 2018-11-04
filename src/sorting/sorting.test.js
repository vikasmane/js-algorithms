const bubbleSort = require('./bubble');
const insertionSort = require('./insertion');
const mergeSort = require('./merge');
const quickSort = require('./quick');
const selectionSort = require('./selection');

test('Bubble Sort', () => {
    expect(bubbleSort([56, 65, 26, 5, 6, 32, 8, 97, 23, 36])).toEqual([5, 6, 8, 23, 26, 32, 36, 56, 65, 97]);
});

test('Insertion Sort', () => {
    expect(insertionSort([185, 21, 5, 51, 1514, 25, 2])).toEqual([2, 5, 21, 25, 51, 185, 1514]);
});

test('Merge Sort', () => {
    expect(mergeSort([52, 65, 92, 3, 54, 12, 22, 3])).toEqual([3, 3, 12, 22, 52, 54, 65, 92]);
});

test('Quick Sort', () => {
    var ar = [12, 56, 5, 35, 32, 66, 23, 65];
    quickSort(ar);
    expect(ar).toEqual([5, 12, 23, 32, 35, 56, 65, 66]);
});

test('Selection Sort', () => {
    expect(selectionSort([3, 56, 39, 65, 6, 83, 68])).toEqual([3, 6, 39, 56, 65, 68, 83]);
});