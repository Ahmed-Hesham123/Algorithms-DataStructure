/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let found = true;
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] !== haystack[i + j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return i;
    }
  }

  return -1;
};

console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
console.log(strStr("aaa", "aaaa")); // -1
console.log(strStr("mississippi", "mississippi")); // 0
console.log(strStr("mississippi", "issi")); // 1

// Big-O = O(n^2) - Quadratic

// Another solution

var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }

  const index = haystack.indexOf(needle);

  return index;
};

// Big-O = O(n) - Linear
