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
    BFS(){
        //start with the root
        //keep node in queue until we dont finish off adding all its children to the queue
        //once done adding all its children pop the node and put it to result array
        let queue = [];
        let result = [];
        let curr = this.root;

        queue.push(curr);
        
        while(curr = queue.shift()){
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
            result.push(curr.val);
        }
        return result;
    }
    DFS_Pre(){
        //start with root
        //Pre order would take parent element before its children
        let result = [];
        let curr = this.root;

        function helper(node){
            result.push(node.val);
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
        }
        helper(curr);
        return result;
    }
    DFS_In(){
        //start with root
        //In order would take parent element between two children
        let result = [];
        let curr = this.root;

        function helper(node){
            if(node.left) helper(node.left);
            result.push(node.val);
            if(node.right) helper(node.right);
        }
        helper(curr);
        return result;
    }
    DFS_Post(){
        //start with root
        //Post order would take parent element after its children
        let result = [];
        let curr = this.root;

        function helper(node){
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
            result.push(node.val);
        }
        helper(curr);
        return result;
    }
}