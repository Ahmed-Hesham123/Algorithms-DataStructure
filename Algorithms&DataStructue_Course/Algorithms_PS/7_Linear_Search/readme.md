# Linear Search Algorithm

## Problem:

- Give an array of `n` elements and a target element `t`, find the index of `t` in the array.
- Return -1 if the target element is not found.

### Examples

    - linearSearch([-5, 2, 10, 4, 10], 10) => 2
    - linearSearch([-5, 2, 10, 4, 6], 6) => 4
    - linearSearch([-5, 2, 10, 4, 6], 20) => -1

### Linear Search Pseudocode

1. Start at the first element in the array and move towards the last.
2. At each element though, check if the element is equal to the target element.
3. If element found, return the index of the element.
4. If element not found, return -1.

### Big-O

    - Big-O = O(n) - Linear
