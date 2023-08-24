# Cartesian Product

## Problem:

- Given two finite non-empty sets, find their cartesian product.

_In Mathematics, specifically set theory, the cartesian product of two sets A and B, denoted AxB, in the set of all ordered pairs(a,b) where a is in A and b is in B._

### Examples

    - const A = [1, 2]
      const B = [3, 4]
      AxB = [[1, 3], [1, 4], [2, 3], [2, 4]]

    - const C = [1, 2]
      const d = [3, 4, 5]
      AxB = [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]

### Cartesian Product Idea

- Traverse each array and pair each element in the first array with each element in the second array.

$$Big-O = O(mn)$$
