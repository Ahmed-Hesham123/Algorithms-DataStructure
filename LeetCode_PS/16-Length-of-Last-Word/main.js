/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let length = 0,
    lastLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      length = 0;
    } else {
      length++;
      lastLength = length;
    }
  }
  return lastLength;
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
console.log(lengthOfLastWord("Today is a nice day")); // 3

// Big-O = O(n) - Linear
