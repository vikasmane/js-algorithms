const BST = require('./bst');

describe('Trees', () => {
    let tree;
    beforeAll(() => {
        tree = new BST();
    });
    test('Insert val to the tree', () => {
        tree.insert(10).insert(5).insert(13).insert(11).insert(2).insert(16).insert(7);
        expect(tree.root.val).toEqual(10);
    });
    test('Find an element in the tree', () => {
        let el = tree.find(13);
        expect(el.val).toEqual(13);
    });
    test('Find if a provided val is in the tree', () => {
        let contains = tree.contains(2);
        expect(contains).toEqual(true);
    })
});

describe('Tree Traversal', () => {
    let tree;
    beforeAll(() => {
        tree = new BST();
        tree.insert(10).insert(5).insert(13).insert(11).insert(2).insert(16).insert(7);
    });
    test('BFS', () => {
        //      10
        //   5      13
        // 2   7  11    16
        //BFS [10,5,13,2,7,11,16]
        expect(tree.BFS()).toEqual([10, 5, 13, 2, 7, 11, 16]);
    });
    test('DFS Pre-Order', () => {
        //      10
        //   5      13
        // 2   7  11    16
        //DFS Pre Order [10, 5, 2, 7, 13, 11, 16];
        expect(tree.DFS_pre()).toEqual([10, 5, 2, 7, 13, 11, 16]);
    });
    test('DFS In-Order', () => {
        //      10
        //   5      13
        // 2   7  11    16
        //DFS In Order [2, 5, 7, 10, 11, 13, 16];
        expect(tree.DFS_in()).toEqual([2, 5, 7, 10, 11, 13, 16]);
    });
    test('DFS Post-Order', () => {
        //      10
        //   5      13
        // 2   7  11    16
        //DFS Post Order [2, 7, 5, 11, 16, 13, 10];
        expect(tree.DFS_post()).toEqual([2, 7, 5, 11, 16, 13, 10]);
    });
})