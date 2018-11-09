const DoublyLinkedList = require('../linked-lists/dll');

module.exports = class Queue {
    constructor() {
        this.list = new DoublyLinkedList();
    }
    push(val) {
        this.list.push(val)
    }
    pop() {
        this.list.pop();
    }
}