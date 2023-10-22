function buildArray(nums: number[]): number[] {
  const lengthOfNums = nums.length;
  const ans: number[] = new Array(lengthOfNums);

  for (let i = 0; i < lengthOfNums; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
}
console.log(buildArray([0, 2, 1, 5, 3, 4]));

// Big-O = O(n) - Linear
