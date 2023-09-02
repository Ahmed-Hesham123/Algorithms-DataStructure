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
