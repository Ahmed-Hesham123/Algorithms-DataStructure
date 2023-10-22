function numIdenticalPairs(nums: number[]): number {
  let numOfGoodPairs: number = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length; j > 0; j--) {
      if (i < j && nums[i] == nums[j]) {
        numOfGoodPairs++;
      }
    }
  }
  return numOfGoodPairs;
}


// Big-O = O(n) - Linear
