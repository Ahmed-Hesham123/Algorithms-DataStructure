function squareSum(numbers) {
  let sumofAllNums = numbers.reduce((acc, curr) => acc + curr * curr, 0);
  return sumofAllNums;
}

console.log(squareSum([1, 2, 2]));
