# Arrays

_An array is a data structure that can hold a collection of data._

- Arrays can contain a mix of different data types,
  You can store strings, booleans, numbers or even objects all in the same array.
- Arrays are resizable. You don't have to declare the size of an array before creating it.
- JavaScript arrays are zero-indexed and the insertion order is maintained.
- Arrays are iterables. They can be used with a for of loop.

### EX:

  <code>
    const arr = [1, 2, 3, "hesham"];
    arr.push(4);
    arr.unshift(0);
    arr.pop();
    arr.shift();
  // map, filter, reduce, concat, slice, splice
    for(const item of arr){
      console.log(item)
    }
  </code>


### Arrays-Big-O time complexity:

- Insert / remove from end - O(1)
- Insert / remove from beginning - O(n)
- Access - O(1)
- Search - O(n)
- Push / pop - (1)
- Shift / unShift / concat / slice / splice - O(n)
- forEach / map / filter / reduce - O(n)
