/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }

  let left = 0,
    right = x,
    result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if(mid * mid === x) {
      return mid;
    } else if(mid * mid < x){
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(81)); // 9

// Big-O = O(logn) - Logarithmic
