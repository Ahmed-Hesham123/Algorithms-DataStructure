/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    let num = 0;
    let j = i;
    while (j > 0) {
      num += j % 2;
      j = Math.floor(j / 2);
    }
    arr.push(num);
  }
  return arr;
};

console.log(countBits(5)); // [0 1 1 2 1 2]

// Big-O = O(n^2) - Quadratic
