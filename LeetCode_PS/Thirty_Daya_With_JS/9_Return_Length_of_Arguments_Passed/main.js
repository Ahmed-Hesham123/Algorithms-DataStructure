/**
 * @return {number}
 */
let argumentsLength = function (...args) {
  return args.length;
};


console.log(argumentsLength(1, 2, 3)); // 3
console.log(argumentsLength([5])); // 1
console.log(argumentsLength([{}, null, "3"])); // 3
console.log(argumentsLength([53, 535, 3, 214, 24, 25, 6, 2, [3, 2]])); // 9

/**
 * argumentsLength(1, 2, 3); // 3
 */

// Big-O = O(1) - Constant
