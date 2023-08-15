// Recursive factorial method

function recursiveFactorial(n) {
  return n === 0 ? 1 : n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(4)); // 4*3*2*1 = 24
console.log(recursiveFactorial(5)); // 5*4*3*2*1 = 120

// Big-O = O(n) - Linear