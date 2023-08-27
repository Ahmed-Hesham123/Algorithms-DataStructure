# Tower Of Hanoi

### Tower Of Hanoi Idea

_The objective of puzzle is to move the entire stack to the last rod, obying the following rules:_

1. Only one disk may be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
3. And lastly, No disk may be placed on top of a disk that is smaller.

### Examples

    - We have two disks.
    -- Shift `n-1` disks from `A` to `B`, using `C` (When required).
    -- Shift last disks from `A` to `C`.
    -- Shift `n-1` disks from `B` to `C`, using `A` (When required).

$$Big-O = O(2^n)$$
