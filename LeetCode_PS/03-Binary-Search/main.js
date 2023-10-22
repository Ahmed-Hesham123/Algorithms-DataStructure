/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let leftIndex = 0,
    rightIndex = nums.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === nums[midIndex]) {
      return midIndex;
    }
    if (target < nums[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return -1;
};

console.log(search([-5, 2, 4, 6, 10], 10)); // 2
console.log(search([-5, 2, 4, 6, 10], 6)); // 4
console.log(search([-5, 2, 4, 6, 10], 20)); //-1
