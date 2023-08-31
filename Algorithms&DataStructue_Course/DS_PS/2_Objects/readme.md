# Objects

_An object is an unordered collection of key-value pairs.The key must either be a string or symbol data type where as the value can be of any data type._

- To retrieve a value, you can use the corresponding key.
  This can be achieved using dot notation or bracket notation.
- An object is not an iterable. You cannot use it with a for of loop.

### EX:

  <code>
    const obj = {
      name: "Ahmed",
      age: 20,
      "key-three": true,
      sayMyName: () => {
        console.log(this.name);
      }
    };
    obj.hobby = "football"; // Add a new key
    delete obj.hobby; // Delete a value
    console.log(obj.name); // Achieve with dot notation
    console.log(obj["age"]); // Achieve with bracket notation (must be a string).
    console.log(obj); // hobby will be there if we didn't delete it.
    obj.sayMyName(); // Output what is inside the function
    // Object.keys() .values .entries()
  </code>

### Objects-Big-O time complexity:

- Insert - O(1)
- Remove - O(1)
- Access - O(1)
- Search - O(n)
- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)
