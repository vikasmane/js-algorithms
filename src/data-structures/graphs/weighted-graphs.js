const UnionFind = require('./../disjoint-sets/union-find');

module.exports = class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
        this.unionFind = new UnionFind();
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
    bellmanFord(v1, v2) {
        let result = {};
        let current = v1;
        let visited = {};

        let v = Object.keys(this.adjacencyList);
        let j = v.length - 1;
        v.reduce((ac, x) => {
            if (x === v1) {
                ac[x] = 0;
            } else {
                ac[x] = Infinity;
            }
            return ac;
        }, result);

        while (j > 0) {
            current = v1;
            visited = {};
            while (current) {
                if (!visited[current]) {
                    this.adjacencyList[current].forEach((x) => {
                        let dV = (result[current] + x.weight);
                        let dU = result[x.node];
                        if (dV < dU) result[x.node] = dV;
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
            j--;
        }
        return result[v2];
    }
    prims(v1) {
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
                    if (result[x.node] > x.weight && !visited[x.node]) result[x.node] = x.weight;
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
        let minCost = 0;
        for (var k in result) {
            minCost += result[k];
        };

        return minCost;
    }
    kruskals() {
        let e = [];
        let v = (new Array(9)).fill(-1);
        for (var k in this.adjacencyList) {
            e = e.concat(this.adjacencyList[k].map((x) => {
                return {
                    v1: k,
                    v2: x.node,
                    weight: x.weight
                }
            }))
        }
        e = e.sort((a, b) => {
            return a.weight - b.weight;
        })
        .map((x, i) => i % 2 === 0 && x).filter(Boolean);

        let r, minCost = 0;
        while(r = e.shift()){
            let isCycle = this.unionFind.union(r['v1'], r['v2']);
            if(!isCycle) {
                minCost += r['weight'];
            }
        }
        return minCost;
    }
}