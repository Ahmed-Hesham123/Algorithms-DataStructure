# Binary Search Algorithm

## Problem:

- Given a sorted array of `n` elements and a target element `t`, find the index of `t` in the array.
- Return -1 if the target element is not found.

### Examples

    - binarySearch([-5, 2, 4, 6, 10], 10) => 2
    - binarySearch([-5, 2, 4, 6, 10], 6) => 4
    - binarySearch([-5, 2, 4, 6, 10], 20) => -1

### Binary Search Pseudocode

1. If the array is empty, return -1 as the element cannot be found.
2. If the array has elements, find the middle element in the array,
   If target is equal to the middle element, return middle element index.
3. If target is less than the middle element, binary search left half of the array.
4. If target is greater than the middle element, binary search right half of the array.

### Big-O

    - Big-O = O(logn) - Logarithmic
