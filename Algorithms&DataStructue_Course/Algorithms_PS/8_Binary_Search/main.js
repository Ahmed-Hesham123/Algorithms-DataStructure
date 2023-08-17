function binarySearch(arr, target) {
  let leftIndex = 0,
    rightIndex = arr.length - 1;
    while(leftIndex <= rightIndex){
      let midIndex = Math.floor((leftIndex + rightIndex) / 2);
      if (target === arr[midIndex]) {
        return midIndex;
      }
      if(target < arr[midIndex]){
        rightIndex = midIndex - 1;
      } else {
        leftIndex = midIndex + 1;
      }
    }
    return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4

// Big-O = O(logn)

// Another Method

// function binarySearch(arr, target) {
//   let min = 0,
//     max = arr.length - 1,
//     mid = Math.floor((arr.length - 1) / 2);
//   if (target === arr[mid]) {
//     return mid;
//   } else if (target < arr[mid]) {
//     for (let i = min; i <= mid; i++) {
//       if (arr[i] === target) {
//         return i;
//       }
//     }
//   } else if (target > arr[mid]) {
//     for (let i = mid; i <= max; i++) {
//       if (arr[i] === target) {
//         return i;
//       }
//     }
//   }
//   return -1;
// }
