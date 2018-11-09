const Heap = require('./heaps');

describe('Heaps', () => {
    let heap;
    beforeAll(() => {
        heap = new Heap();
    })
    test('Add elements to the heap', () => {
        heap.push(41).push(39).push(33).push(18).push(27).push(12).push(55);
        expect(heap.list).toEqual([55, 39, 41, 18, 27, 12, 33]);
    });
    test('Extract max from the heap', () => {
        let max = heap.extractMax(); // 55
        expect(max).toEqual(55);
        expect(heap.list).toEqual([41, 39, 33, 18, 27, 12]);
    });

})