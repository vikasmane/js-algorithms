class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

module.exports = class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.length){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }
    pop(){
        if(this.length==1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next.prev = null;
            this.tail.next = null;
        }

        this.length--;
        return this;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.length){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
            this.head.next.prev = this.head;
        }
        this.length++;
        return this;
    }
    shift(){
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev.next = null;
            this.head.prev = null;
        }
        this.length--;
        return this;
    }
    get(index){
        if(index >= this.length) return -1;

        let curr = this.head, i = 0;
        while(index != i){
            curr = curr.next;
            i++;
        }
        return curr;
    }
    set(index, val){
        if(index >= this.length) return false;

        let curr = this.head, i=0;
        while(index != i){
            curr = curr.next;
            i++;
        }
        curr.val = val;
        return true;
    }
}