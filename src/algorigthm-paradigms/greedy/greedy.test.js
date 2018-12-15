const activitySelection = require('./activity-selection');

describe('Greedy Algorithms', () => {
    test('Activity Selection Problem', () => {
        let activities = activitySelection([[1, 2], [3, 4], [0, 6], [5, 7], [8, 9], [5, 9]]);
        expect(activities).toEqual([0, 1, 3, 4]);
    });

});