/**
 * Get all Factors of a number
 * This algorithm would run efficiently and would give us time complexity of O(sqrt N);
 */

module.exports = function (num) {
    let factors = num !== 1 && [1, num] || [1];
    let max = num;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            let div = num / i;
            factors.push(i);

            if (i !== div) {
                factors.push(div);
            }
            max = div;
        }
    }
    return factors;
}