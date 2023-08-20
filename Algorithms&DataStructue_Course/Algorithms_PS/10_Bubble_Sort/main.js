function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSort([-6, 20, 8, -2, 4]));

// Big-O = O(n^2)

// Another Method
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let flag = 0;
//     if (arr[i + 1] < arr[i]) {
//       [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
//       flag = 1;
//     }
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j + 1] < arr[j]) {
//         [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//         flag = 1;
//       }
//     }
//     if (flag === 0) {
//       return arr;
//     }
//   }
// }

// console.log(bubbleSort([-6, 20, 8, -2, 4]));

// Big-O = O(n^2)
