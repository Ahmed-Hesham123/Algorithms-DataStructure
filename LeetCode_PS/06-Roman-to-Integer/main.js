/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0,
    prevValue = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i],
      value = roman[char];

    if (value > prevValue) {
      total += value - 2 * prevValue;
    } else {
      total += value;
    }
    prevValue = value;
  }
  return total;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

/*

I             1
V             5
X             10
L             50
C             100
D             500
M             1000

*/

// Big-O = O(n) - Linear
