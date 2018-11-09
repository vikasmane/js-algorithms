// Heaps
// Max Heap

module.exports = class Heap {
    constructor() {
        this.list = [];
    }
    push(val) {
        this.list.push(val);
        this.bubbleUp();

        return this;
    }
    bubbleUp() {
        let idx = this.list.length - 1;
        let elem = this.list[idx];
        while (idx > 0) {
            let parent = this.parent(idx);
            let parentEl = this.list[parent];
            if (parentEl < elem) {
                this.list[parent] = elem;
                this.list[idx] = parentEl;
            } else {
                break;
            }
            idx = parent;
        }
    }
    parent(i) {
        return Math.floor((i - 1) / 2);
    }
    extractMax() {
        let el = this.list[0];
        this.bubbleDown();
        return el;
    }
    bubbleDown() {
        let elem = this.list.pop();
        let idx = 0;
        if (this.list.length > 0) this.list[idx] = elem;
        while (idx < this.list.length) {
            let leftChild = this.left(idx);
            let lChildEl = ~leftChild && this.list[leftChild];
            let rightChild = this.right(idx);
            let rChildEl = ~rightChild && this.list[rightChild];
            let swap;

            if (lChildEl) {
                if (lChildEl > elem) {
                    swap = leftChild;
                }
            }
            if (rChildEl) {
                if (swap) {
                    if (lChildEl < rChildEl) {
                        swap = rightChild;
                    }
                } else if (rChildEl > elem) {
                    swap = rightChild;
                }
            }
            if (!swap) break;
            this.list[idx] = this.list[swap];
            this.list[swap] = elem;
            idx = swap;
        }
    }
    left(idx) {
        let cIndex = 2 * idx + 1;
        return cIndex >= this.list.length ? -1 : cIndex;
    }
    right(idx) {
        let cIndex = 2 * idx + 2;
        return cIndex >= this.list.length ? -1 : cIndex;
    }
}