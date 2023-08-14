function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Big-O = O(n) - Linear Time Complexity

// function factorial(n) {
//   let newNum = 1;
//   if(n == 0){
//     return 1;
//   } else if (n < 0) {
//     return;
//   } else {
//     // for(let i =n; i>=1; i--) {
//     //   newNum *= i;
//     // }
//     newNum = (n * n-1);
//   }
//   return newNum;
// }

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(4)); // 4*3*2*1 = 24
console.log(factorial(5)); // 5*4*3*2*1 = 120

// Another Method
// function factorial(n) {
//   let result = 1;
//   if (n == 0) {
//     return 1;
//   } else {
//     result = n * anotherMAthod(n - 1);
//   }
//   return result;
// }

// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1
// console.log(factorial(4)); // 4*3*2*1 = 24
// console.log(factorial(5)); // 5*4*3*2*1 = 120
