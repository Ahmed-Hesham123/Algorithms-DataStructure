# Quick Sort Algorithm

## Problem:

- Given an array of integers, sort the array.

### Examples

    - const arr = [-6, 20, 8, -2, 4];
    - bubbleSort(arr) => Should return [-6, -2, 4, 8, 20]

### Quick Sort Idea

- Identify the pivot element in the array.
  -- Pick first element as pivot.
  -- Pick last element as pivot. (Our approach)
  -- Pick a random element as pivot.
  -- Pick median as pivot.
- Put everything that's smaller that thr pivot into a `left` array,
  and everything that's greater than the pivot into a `right` array.
- Repeat the process for the individual `left` and `right` arrays
  till you have an array of length 1 which is sorted by definition.
- Repeatedly concatenate the left array, pivot and right array
  till one sorted array remains.

#### EX:

                        [-6, 20, 8, -2, `4`]

                      left     pivot    right
                    [-6, -2]    [4]    [8, 20]

            left   pivot   right    left   pivot  right
            [-6]    [-2]    []      [8]    [20]    []

                        [-6, -2, 4, 8, 20]

                                [4]

                        [-6, -2]    [8, 20]

### Big-O

     Worst Case - O(n^2)
     Avg Case =  O(nlogn)
