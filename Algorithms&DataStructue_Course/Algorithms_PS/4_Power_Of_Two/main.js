// Best Solution
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(1)); // true (2^0)
console.log(isPowerOfTwoBitWise(2)); // true (2^1)
console.log(isPowerOfTwoBitWise(5)); // false
console.log(isPowerOfTwoBitWise(8)); // true (2^3)

// Big-O = O(1) - Constant Time Complexity

// Another Solution (this solution may get time complexity error)
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }

  return true;

  // Another Solution (this solution may get time complexity error)
  // for (let i = 0; i < n; i++) {
  //   if (2 ** i === n) {
  //     return true;
  //   } else {
  //  return false;
  // }
  // }
  // Big-O = O(n) - Logarithmic Time Complexity
}

console.log(isPowerOfTwo(1)); // true (2^0)
console.log(isPowerOfTwo(2)); // true (2^1)
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(8)); // true (2^3)

// Big-O = O(logn) - Logarithmic Time Complexity
