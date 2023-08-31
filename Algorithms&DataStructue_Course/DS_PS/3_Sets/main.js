const set = new Set([1, 2, 3]);

set.add(4); // Add a new item.
console.log(set.has(4)); // Check if an element is included
set.delete(3); // Delete an item
console.log(set.size); // Get length
set.clear(); // Delete all elements.

for (const item of set) {
  console.log(item); // Print all elements
}
