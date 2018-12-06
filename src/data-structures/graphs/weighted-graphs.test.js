const WeightedGraph = require('./weighted-graphs');

/**
 * Weighted Directed graph representation
 *       6
 * A------------>B
 * |           / |  \
 * |         /   |    \ 
 * | 1  2  /     |2    \  5
 * |    /        |       \
 * V |_          V        _|
 * D------------>E<---------C
 *        1            5
 * Dijkstra's Algorthm would work on given weighted directed graph and 
 * would give single source shortest path
 * from A to C as
 * A -> B -> V
 * and cost would be 11
 * 
 * Same graph would yield different single source shortest path for nondirected graph 
 * from A to C as
 * A -> D -> E -> C
 * and cost would be 7
 */
describe('Dijkstra\'s algorithm on weighted directed graph', () => {
    let graph;

    beforeAll(() => {
        graph = new WeightedGraph;
        graph.addVertex('B').addVertex('C').addVertex('A').addVertex('D').addVertex('E');
        graph
            .addEdge('A', 'B', 6, true).addEdge('B', 'C', 5, true)
            .addEdge('B', 'D', 2, true).addEdge('B', 'E', 2, true)
            .addEdge('C', 'E', 5, true).addEdge('D', 'E', 1, true)
            .addEdge('A', 'D', 1, true);
    })
    test('Dijkstras', () => {
        expect(graph.dijkstra('A', 'C')).toEqual(11);
    })
});

describe('Dijkstra\'s algorithm on weighted nondirected graph', () => {
    let graph;

    beforeAll(() => {
        graph = new WeightedGraph;
        graph.addVertex('B').addVertex('C').addVertex('A').addVertex('D').addVertex('E');
        graph
            .addEdge('A', 'B', 6).addEdge('B', 'C', 5)
            .addEdge('B', 'D', 2).addEdge('B', 'E', 2)
            .addEdge('C', 'E', 5).addEdge('D', 'E', 1)
            .addEdge('A', 'D', 1);
    })
    test('Dijkstras', () => {
        expect(graph.dijkstra('A', 'C')).toEqual(7);
    })
});

/**
 * Graph representation for weighted directed graph with negative edges
 *       5            1          3      
 *  s--------->A----------->B--------t  
 *   \         ^       -|   |      -|   
 *     \     2 |   4  /   -1|     /     
 *    -2 \     |   /        |   /   1   
 *         _|  | /          V /         
 *             C----------->D           
 *                  4                  
 * Bellman-ford suggest for above graph the shortest path from s to t is
 * s -> C -> A -> B -> D -> t
 * and overall cost would be 
 * 1
 */
describe('Bellman ford algorithm on weighted directed graph with negative edges', () => {
    let graph;

    beforeAll(() => {
        graph = new WeightedGraph;
        graph.addVertex('s').addVertex('A').addVertex('B').addVertex('C').addVertex('D').addVertex('t');
        graph
            .addEdge('s', 'A', 5, true).addEdge('s', 'C', -2, true)
            .addEdge('A', 'B', 1, true)
            .addEdge('C', 'A', 2, true).addEdge('C', 'B', 4, true).addEdge('C', 'D', 4, true)
            .addEdge('B', 'D', -1, true).addEdge('B', 't', 3, true)
            .addEdge('D', 't', 1, true);
    })
    test('Bellman-Ford', () => {
        expect(graph.bellmanFord('s', 't')).toEqual(1);
    })
});

/**
 * Find Minimum Cost spanning tree from below graph
 *      4        8          7           9          
 *  0-------1--------2-----------3-----------4     
 *  |       |        | \         |         /       
 *  |       |      2 |   \       |       /         
 *  |     11|        8     \ 4   |14   /  10       
 *  |       |  7  /  | 6     \   |   /             
 *  |       |  /     |         \ | /               
 *   -------7--------6-----------5                 
 *      8        1          2                       
 */
describe('Minimum cost spanning tree', () => {
    let graph;

    beforeAll(() => {
        graph = new WeightedGraph;
        graph
            .addVertex('0').addVertex('1').addVertex('2')
            .addVertex('3').addVertex('4').addVertex('5')
            .addVertex('6').addVertex('7').addVertex('8');
        graph
            .addEdge('0', '1', 4).addEdge('0', '7', 8)
            .addEdge('1', '7', 11).addEdge('1', '2', 8)
            .addEdge('7', '6', 1).addEdge('7', '8', 7)
            .addEdge('6', '8', 6).addEdge('6', '5', 2)
            .addEdge('2', '3', 7).addEdge('2', '5', 4).addEdge('2', '8', 2)
            .addEdge('3', '4', 9).addEdge('3', '5', 14)
            .addEdge('4', '5', 10);
    })
    test('Prim\'s algorithm', () => {
        expect(graph.prims('0')).toEqual(37);
    })
    test('Kruskal\'s algorithm', () => {
        expect(graph.kruskals('0')).toEqual(37);
    })
});