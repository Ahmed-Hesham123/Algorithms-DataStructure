/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows <= 0) {
    return [];
  }
  const arr = [];
  for (let i = 0; i < numRows; i++) {
    const arr2 = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        arr2[j] = 1;
      } else {
        arr2[j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
    arr[i] = arr2;
  }

  return arr;
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]

// Big-O = O(n^2) - Logarithmic
