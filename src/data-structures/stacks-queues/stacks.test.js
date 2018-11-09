const Stack = require('./stacks');

describe('Stacks', () => {
    let stack;
    beforeAll(() => {
        stack = new Stack();
    });
    test('Add element to the stack', () => {
        stack.push(10);
        expect(stack.list.length).toEqual(1);
    });
    test('Pop element from the stack', () => {
        stack.pop();
        expect(stack.list.length).toEqual(0);
    });
})