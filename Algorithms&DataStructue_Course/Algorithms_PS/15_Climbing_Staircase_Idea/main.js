function climbingStaircase(n) {
  const nOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    nOfWays[i] = nOfWays[i - 1] + nOfWays[i - 2];
  }
  return nOfWays[n - 1];
}

console.log(climbingStaircase(1)); // 1
console.log(climbingStaircase(2)); // 2
console.log(climbingStaircase(3)); // 3
console.log(climbingStaircase(4)); // 5

// Big-O = O(n) - Linear
