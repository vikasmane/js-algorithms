class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

module.exports = class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }
    delete() {
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            let cur = this.head;
            let pre;
            while (cur.next) {
                pre = cur;
                cur = cur.next;
            };

            this.tail = pre;
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
        }

        this.length--;
        return this;
    }

    get(index){
        if(index > this.length) return -1;

        let i = 0;
        let curr = this.head;
        while(index != i){
            curr = curr.next; 
            i++;
        }
        return curr;
    }

    set(index, val){
        if(index >= this.length) return false;

        let i = 0;
        let curr = this.head;
        while(index != i){
            curr = curr.next; 
            i++;
        }
        curr.val = val;
        return true;
    }

    
}