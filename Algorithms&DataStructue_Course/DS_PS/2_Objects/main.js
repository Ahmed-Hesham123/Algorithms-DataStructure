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
