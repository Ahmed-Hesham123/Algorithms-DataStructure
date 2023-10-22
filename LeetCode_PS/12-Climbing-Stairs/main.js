/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const nOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    nOfWays[i] = nOfWays[i - 1] + nOfWays[i - 2];
  }

  return nOfWays[n - 1];
};
