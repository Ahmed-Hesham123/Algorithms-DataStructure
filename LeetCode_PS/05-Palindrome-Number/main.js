/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let palindrome = x.toString();
  for (let i = 0; i < palindrome.length - 1; i++) {
    if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(1000021));
console.log("============");

// Big-O = O(n)
// Space Complexity (log x)