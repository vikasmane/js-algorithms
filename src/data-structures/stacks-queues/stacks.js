// Stack
// Stacks using linked list
const DoublyLinkedList = require('../linked-lists/dll');

module.exports = class Stack {
    constructor() {
        this.list = new DoublyLinkedList();
    }
    push(val) {
        this.list.shift(val);
    }
    pop() {
        this.list.unshift();
    }
}