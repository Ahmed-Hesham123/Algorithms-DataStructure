/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let newfib = [0, 1];
  if (n < 2) {
    return n;
  }
  for (let i = 2; i <= n; i++) {
    newfib[i] = newfib[i - 1] + newfib[i - 2];
  }

  return newfib[newfib.length - 1];
};

console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5

// Big-O = O(n) - Iterative

// ================================

console.log("***=================***");
// Another Solution

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(5)); // 5
console.log(recursiveFibonacci(6)); // 8
console.log(recursiveFibonacci(7)); // 8

// Big-O = O(2^n) - Recursive

// Recursion is not a good solution to the fibonacci sequence problem because big-o is O(2^n)
