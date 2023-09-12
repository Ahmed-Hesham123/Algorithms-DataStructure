/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let newInit = init;
    for (let i = 0; i < nums.length; i++) {
        newInit = fn(newInit, nums[i]);
    }
    return newInit;
};

// Big-O = O(n) - Linear
