# Merge Sort Algorithm

## Problem:

- Given an array of integers, sort the array.

### Examples

    - const arr = [-6, 20, 8, -2, 4];
    - mergeSort(arr) => Should return [-6, -2, 4, 8, 20]

### Merge Sort Idea

- Divide the array into sub arrays, each containing only
  one element(An array with one element is considered sorted)
- Repeatly merge the sub arrays to produce new sorted sub arrays
  until there is only one sub array remaining. That will be the sorted array.

#### EX:

                        [-6, 20, 8, -2, `4`]

                    [-6, 20]    [8]    [-2, 4]
                      /   \      |         |
                  [-6]    [20]  [8]    [-2, 4]
                    |       |    |      /   \
                  [-6]    [20]  [8]  [-2]    [ 4]
                    \     /      |      \    /
                    [-6, 20]    [8]    [-2, 4]
                        |         \     /
                    [-6, 20]        [-2, 4, 8]

                        [-6, -2, 4, 8, 20]

    [-6] [20] => []  - Left & right are not empty. -6 < 20
    []  [20] => [-6] - Left is empty. Push right array
    [] => [-6, 20]

    [8] [-2, 4] => [] - Left & right are not empty. -2 < 8
    [8] [4] => [-2] - Left & right are not empty. 4 < 8
    [8] [] => [-2, 4] - Right is empty. Push left array
    [] => [-2, 5, 8]

    [-6, 20] [-2, 4, 8] => [] - Left & right are not empty -6 < -2
    [20] [-2, 4, 8] => [-6] - Left & right are not empty -2 < 20
    [20] [4, 8] => [-6, -2] - Left & right are not empty 4 < 20
    [20] [8] => [-6, -2, 4] - Left & right are not empty 8 < 20
    [20] [] => [-6, -2, 4, 8] - Right is empty. Push left array
    [] [] => [-6, -2, 4, 8, 20]


### Big-O

     Worst Case - O(n^2)
     Avg Case =  O(nlogn)
