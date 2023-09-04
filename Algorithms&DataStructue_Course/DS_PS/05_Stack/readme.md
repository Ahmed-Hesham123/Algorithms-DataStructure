# Stack

_The stack data structure is a sequential collection of elements that follows the principle of first in last out (FILO) or (LIFO)._

- The first element inserted into the stack is the last element to be removed.
- A stack of plates. The last plate placed on top of the stack is also the first plate removed from the stack.
- Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model.
- The stack data strucure supports two main operations:
  -- Push => Which adds an element to the collection.
  -- Pop  => Which removes the most recently added element from the collection.

## Stack Usage

- Browser history tracking.
- Undo operation when typing.
- Expression conversions.
- Call stack in JavaScript runtime.

### Stack Implementation 

- Push    => add an element to the top of the stack.
- Pop     => remove the top most element from the stack.
- Peek    => get the value of the top element without removing it.
- isEmpty => check if the stack is empty.
- Size    => get the number of elements in the stack.
- Print   => visualize the elements in the stack.

### EX:

  <code>
  class Stack {
    constructor() {
      this.items = [];
    }
    push(element) {
      this.items.push(element);
    }
    pop() {
      return this.items.pop();
    }
    peek() {
      return this.items[this.items.length - 1];
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
    print() {
      console.log(this.items.toString());
    }
  }
  </code>

$$Big-O = O(1) - Constant$$
