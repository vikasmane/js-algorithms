const activitySelection = require('./activity-selection');
const coinChange = require('./coin-change');
const knapsack = require('./fractional-knapsack');

describe('Greedy Algorithms', () => {
    test('Activity Selection Problem', () => {
        let activities = activitySelection([[1, 2], [3, 4], [0, 6], [5, 7], [8, 9], [5, 9]]);
        expect(activities).toEqual([0, 1, 3, 4]);
    });

    test('Coin change problem', () => {
        let _coinChange = coinChange(93);
        expect(_coinChange).toEqual([50, 20, 20, 2, 1]);
    });

    test('Fractional knapsack', () => {
        expect(knapsack([
            { value: 10, weight: 2 }, 
            { value: 5, weight: 3 }, 
            { value: 15, weight: 5 }, 
            { value: 7, weight: 7 }, 
            { value: 6, weight: 1 }, 
            { value: 18, weight: 4 }, 
            { value: 3, weight: 1 }
        ], 15)).toEqual(55.333333333333336);
    })
});