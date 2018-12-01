
module.exports = class WeightedGraph {
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
    addEdge(v1, v2, weight, uniDirectional) {
        if (this.adjacencyList[v1]) this.adjacencyList[v1].push({ node: v2, weight });
        if (!uniDirectional && this.adjacencyList[v2]) this.adjacencyList[v2].push({ node: v1, weight });
        return this;
    }
    removeEdge(v1, v2, both) {
        if (this.adjacencyList[v1]) this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v != v2);
        if (both && this.adjacencyList[v2]) this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v != v1);
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

    dijkstra(v1, v2) {
        let result = {};
        let current = v1;
        let visited = {};

        let v = Object.keys(this.adjacencyList);
        v.reduce((ac, x) => {
            if (x === v1) {
                ac[x] = 0;
            } else {
                ac[x] = Infinity;
            }
            return ac;
        }, result);

        while (current) {
            if (!visited[current]) {
                this.adjacencyList[current].forEach((x) => {
                    if ((result[current] + x.weight) < result[x.node]) result[x.node] = result[current] + x.weight;
                });
                visited[current] = true;
            }
            let min = Infinity, minV;
            for (var k in result) {
                if (!visited[k]) {
                    if (result[k] < min) {
                        min = result[k];
                        minV = k;
                    }
                }
            };

            current = minV;
        }

        return result[v2];
    }
}