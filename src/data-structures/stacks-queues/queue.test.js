const Queue = require('./queue');

describe('Queue', () => {
    let queue;
    beforeAll(() => {
        queue = new Queue();
    });
    test('Push element to the queue', () => {
        queue.push(10);
        expect(queue.list.length).toEqual(1);
    });
    test('Pop element from the queue', () => {
        queue.pop();
        expect(queue.list.length).toEqual(0);
    })
})