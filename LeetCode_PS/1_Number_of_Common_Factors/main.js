/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  let count = 0;

  for (let i = 1; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
      count++;
    }
  }

  return count;
};

console.log(commonFactors(12, 6)); // 4
console.log(commonFactors(25, 30)); // 2
console.log(commonFactors(885, 885)); // 8
