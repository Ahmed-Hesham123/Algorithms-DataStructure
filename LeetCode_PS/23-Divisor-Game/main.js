/**
 * @param {number} n
 * @return {boolean}
 */
let divisorGame = function (n) {
  // Create a boolean array to memoize the results
  const dp = new Array(n + 1).fill(false);

  // Alice starts the game, and if n is even, she wins
  if (n % 2 === 0) {
    return true;
  }

  // Initialize base cases
  dp[1] = false;
  dp[2] = true;

  // Calculate the results using dynamic programming
  for (let i = 3; i <= n; i++) {
    dp[i] = false;
    for (let x = 1; x < i; x++) {
      if (i % x === 0 && !dp[i - x]) {
        dp[i] = true;
        break;
      }
    }
  }

  // The final result for n represents whether Alice can win
  return dp[n];
};

console.log(divisorGame(2)); // true
console.log(divisorGame(3)); // false
console.log(divisorGame(4)); // true

// Big-O = O(n^2) - Logarithmic
