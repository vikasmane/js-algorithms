const Graph = require('./graphs');

describe('Graphs', () => {
    let graph;
    beforeAll(() => {
        graph = new Graph;
    });
    test('Add a vertex to the graph', () => {
        graph.addVertex('B').addVertex('C').addVertex('A').addVertex('D');
        expect(graph.adjacencyList['B']).toEqual([]);
    });
    test('Add an Edge to the graph', ()=>{
        graph.addEdge('B', 'C').addEdge('C', 'A').addEdge('A', 'D').addEdge('D', 'B').addEdge('C', 'D');
        expect(graph.adjacencyList['B']).toHaveLength(2);
        expect(graph.adjacencyList['D']).toHaveLength(3);
    });
    test('Remove a vertex from the graph', () => {
        graph.removeVertex('B');
        expect(graph.adjacencyList['B']).toEqual(undefined);
        expect(graph.adjacencyList['D']).not.toContain('B');
        expect(graph.adjacencyList['C']).not.toContain('B');
        expect(graph.adjacencyList['A']).not.toContain('B');
    });
    test('Remove an edge from the graph', () => {
        graph.removeEdge('C', 'D');
        expect(graph.adjacencyList['D']).toHaveLength(1);
    });
});
// Graph 
// B----D
// |  / |
// | /  |
// C----A
describe('Graph Traversal', ()=>{
    let graph;
    beforeAll(()=>{
        graph = new Graph;
        graph.addVertex('B').addVertex('C').addVertex('A').addVertex('D');
        graph.addEdge('B', 'C').addEdge('C', 'A').addEdge('C', 'D').addEdge('A', 'D').addEdge('D', 'B');
        console.log(graph.adjacencyList);
    });

    test('BFS', ()=>{
        expect(graph.BFS('B')).toEqual(['B', 'C', 'D', 'A']);
    });
    test('DFS', ()=>{
        expect(graph.DFS('B')).toEqual(["B", "D", "A", "C"]);
    })
});