# Recursive Factorial Of A Number Algorithm

## Problem:

- Give a number `n`, find the Factorial of that integer.
- In Mathematics, the Factorial of a non-negative integer `n`, denoted n!, is the product of all positive integers less than or equal to `n`.
- _Factorial of Zero is 1_.

### Examples

- recursiveFactorial(4) = 24 (4 * 3 * 2 * 1)
- recursiveFactorial(5) = 120 (5 * 4 * 3 * 2 * 1)

### Recursive factorial of a number contd.

    *Factorial of a non-negative integer `n` is the product of all positive integers less than or equal to `n`.*
        - 5! = 5 * 4 * 3 * 2 * 1 => 5 * 4!
        - 0! = 1
    *n! = n * (n - 1)!*
    *Big-O = O(n) - Linear*
