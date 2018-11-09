class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}

module.exports = class BST {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (!this.root){
            this.root = newNode;
            return this;
        }
        let curr = this.root;

        while (curr) {
            if(curr.val === val) return undefined;
            if (curr.val > val) {
                if (!curr.left) {
                    curr.left = newNode;
                    break;
                }
                curr = curr.left;
            } else {
                if (!curr.right) {
                    curr.right = newNode;
                    break;
                }
                curr = curr.right;
            }
        }
        return this;
    }
    find(val){
        if(!this.root) return -1;
        let curr = this.root;
        while(curr){
            if(val === curr.val) return curr;
            if(val < curr.val){
                curr = curr.left;
            }else if(val > curr.val){
                curr = curr.right;
            }
        }
        return -1;
    }
    contains(val){
        return !!(~this.find(val));
    }
}