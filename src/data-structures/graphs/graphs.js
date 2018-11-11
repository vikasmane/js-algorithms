const Graph = module.exports = class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return this;
    }
    removeVertex(vertex) {
        let vertices = this.adjacencyList[vertex];
        let j = 0;
        while (j < vertices.length) {
            let v = vertices[j];
            this.adjacencyList[v] = this.adjacencyList[v].filter(_v => _v !== vertex);
            j++;
        }
        if (this.adjacencyList[vertex]) delete this.adjacencyList[vertex];
        return this;
    }
    addEdge(v1, v2) {
        if (this.adjacencyList[v1]) this.adjacencyList[v1].push(v2);
        if (this.adjacencyList[v2]) this.adjacencyList[v2].push(v1);
        return this;
    }
    removeEdge(v1, v2) {
        if (this.adjacencyList[v1]) this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v != v2);
        if (this.adjacencyList[v2]) this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v != v1);
        return this;
    }
    BFS(start) {
        let queue = [start];
        let result = [];
        let visited = { [start]: true };
        let curr;
        while (curr = queue.shift()) {
            result.push(curr);
            if (this.adjacencyList[curr]) {
                this.adjacencyList[curr].forEach((v) => {
                    if (!visited[v]) {
                        visited[v] = true;
                        queue.push(v);
                    }
                });
            }
        }
        return result;
    }
    DFS(start) {
        let result = [];
        let visited = { [start]: true };
        let curr;
        let stack = [start];

        while (curr = stack.pop()) {
            result.push(curr);
            this.adjacencyList[curr].forEach((v) => {
                if (!visited[v]) {
                    visited[v] = true;
                    stack.push(v);
                }
            })
        }
        return result;
    }
}