# Sets

_A set is a data structure that can hold a collection of values. The values however must be unique._

- Set can contain a mix of different data types.
  You can strore strings, booleans, numbers or even objects all in the same set.
- Sets are dynamically sized. You don't have to declare the size of a set before creating it.
- Sets don't maintain an insertion order.
- Sets are iterables. They can be used with a for of loop.

## Set vs Array

- Arrays can contain duplicate values whereas sets cannot.
- Insertion order is a maintained in Arrays but is not the case with sets.
- Searching and deleting an element in the set is faster compared to arrays.

### EX:

  <code>
    const set = new Set([1, 2, 3]);
    set.add(4); // Add a new item.
    console.log(set.has(4)); // Check if an element is included
    set.delete(3); // Delete an item
    console.log(set.size); // Get length
    set.clear(); // Delete all elements.
    for (const item of set) {
      console.log(item); // Print all elements
    }
  </code>
