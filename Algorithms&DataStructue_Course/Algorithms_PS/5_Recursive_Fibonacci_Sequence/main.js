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

console.log("====================");

// Big-O = O(2^n) - Recursive

// Recursion is not a good solution to the fibonacci sequence problem because big-o is O(2^n)


function anotherFibonacci(n) {
  let fib = [0, 1];
  if (n < 2) {
    return n;
  }
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[fib.length - 1];
}

console.log(anotherFibonacci(0)); // 0
console.log(anotherFibonacci(1)); // 1
console.log(anotherFibonacci(2)); // 1
console.log(anotherFibonacci(3)); // 2
console.log(anotherFibonacci(5)); // 5
console.log(anotherFibonacci(6)); // 8
console.log(anotherFibonacci(7)); // 8

// Big-O = O(n) - Iterative