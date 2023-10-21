# Maps

_A map is an unordered collection of key-value pairs. Both keys and values can be of any data type._

- To retrieve a value, you can use the corresponding key.
- Maps are iterables. Thay can be used with a for of loop.

## Maps vs Objects

- Objects are unordered where as maps are ordered.
- Keys in objects can only be string or symbol type
  where as in maps, they can be of any type.
- An object has a prototype and may contain a few default keys
  which may collide with your own keys if you are not careful. A map
  on the other hand does not contain any keys by default.
- Objects are not iterables where as maps are iterables.
- The number of items in an object must be determined manually
  where as it is readily available with the size properly in a map.
- Apart from storing datam you can attach functionality to an object
  where as maps are restricted to just storing data.

### EX:

  <code>
    const map = new Map([
      ["a", 1],
      ["b", 2],
    ]);
    map.set("c", 3); // Add a new item.
    map.delete("c"); // Delete an item
    console.log(map.has("a")); // Check if an element is included
    console.log(map.size); // Get the length of a map
    map.clear(); // Delete all elements.
    for (const [key, value] of map) {
    console.log(`${key}: ${value}`); // Print all elements
    }
</code>
