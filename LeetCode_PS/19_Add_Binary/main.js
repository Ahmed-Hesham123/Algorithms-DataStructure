/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  a = a.toString();
  b = b.toString();
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  let res = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const numA = i >= 0 ? parseInt(a[i]) : 0;
    const numB = j >= 0 ? parseInt(b[j]) : 0;
    const sum = numA + numB + carry;

    res = (sum % 2) + res;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }
  return res;
};

console.log(addBinary(11, 1));
console.log(addBinary(1010, 1011));

// Big-O = O(n) - Linear
