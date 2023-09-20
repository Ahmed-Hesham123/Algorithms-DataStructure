/**
 * @param {Function} fn
 * @return {Function}
 */
let once = function (fn) {
  let flag = false;
  return function (...args) {
    if (!flag) {
      flag = true;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

// Big-O = O(1) - Constant
