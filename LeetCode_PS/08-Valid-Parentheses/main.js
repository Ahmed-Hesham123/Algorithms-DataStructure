/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const brackets = [
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ];


  const stack = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < brackets.length; j++) {
      if (s[i] === brackets[j][0]){
        stack.push(s[i]);
      } else if(s[i] === brackets[j][1]) {
        if(stack.length === 0 || stack.pop() !== brackets[j][0]){
          return false;
        }
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("(){}}{")); // false

// Big-O = O(n^2)
