/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1; // Start with a carry of 1
  let sum = [];

  for (let i = digits.length - 1; i >= 0; i--) {
    let digitSum = digits[i] + carry;

    if (digitSum >= 10) {
      carry = 1;
      digitSum %= 10;
    } else {
      carry = 0;
    }

    sum.unshift(digitSum); // Add the digit to the beginning of the array
  }

  if (carry === 1) {
    sum.unshift(1); // If there's still a carry, add it to the beginning
  }

  return sum;
};

console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([4, 3, 2, 10])); // [4,3,2,2]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

// Big-O = O(n) - Linear
