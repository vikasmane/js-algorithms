
const SinglyLinkedList = require('./sll');
const DoublyLinkedList = require('./dll');

describe('Singly Linked List', ()=>{
    let sll;
    beforeAll(()=>{
        sll = new SinglyLinkedList(); 
    });

    test('Add element to the tail', ()=>{
        sll.add(12);
        expect(sll.head).toEqual(sll.tail);
        expect(sll.length).toEqual(1);
    });

    test('Delete element from tail', ()=>{
        sll.delete();
        expect(sll.head).toEqual(sll.tail);
    });

    test('Add elements to the tail', ()=>{
        sll.add(5).add(10).add(15);
        expect(sll.length).toEqual(3);
    });

    test('Delete elements from tail', ()=>{
        sll.delete().delete();
        expect(sll.length).toEqual(1);
    });

    test('Shifts element in the list', ()=>{
        sll.shift(10);
        expect(sll.head.val).toEqual(10);
        expect(sll.length).toEqual(2);
    });

    test('Unshifts first element in the list and returns length', ()=>{
        sll.unshift();
        expect(sll.head.val).toEqual(5);
        expect(sll.length).toEqual(1);
    });

    test('Get a indexed element from linked list', ()=>{
        let el = sll.get(3);
        expect(el).toEqual(-1);
        let el1 = sll.get(0);
        expect(el1.val).toEqual(5);
    });
    test('Set a indexed elements val to given val', () =>{
        let changed = sll.set(1, 6);
        expect(changed).toEqual(false);
        let changed1 = sll.set(0, 4);
        expect(changed1).toEqual(true);
        expect(sll.head.val).toEqual(4)
    });
});

describe('Doubly Linked List', ()=>{
    let dll;
    beforeAll(()=>{
        dll = new DoublyLinkedList();
    });

    test('Push element to the end of the list', ()=>{
        dll.push(5);
        expect(dll.head).toEqual(dll.tail);
    });
    test('Pop element from the end of the list', ()=>{
        dll.pop();
        expect(dll.tail).toEqual(null);
    });
    test('Shift element to the list', ()=>{
        dll.shift(5).shift(10);
        expect(dll.head.val).toEqual(10);
    });
    test('Unshift element from the list', () =>{
        dll.unshift();
        expect(dll.head.val).toEqual(5);
    });
    test('Get an element at an index', ()=>{
        let el = dll.get(0);
        expect(el.val).toEqual(5);
    });
    test('Set an elements val', ()=>{
        let changed = dll.set(0, 10);
        expect(changed).toEqual(true);
        expect(dll.get(0).val).toEqual(10);
    })
});