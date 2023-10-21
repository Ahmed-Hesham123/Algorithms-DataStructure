const LinkedList = require("./linked-list");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const Stack = new LinkedListStack();
console.log(Stack.isEmpty());

Stack.push(10);
Stack.push(20);
Stack.push(30);
console.log(Stack.getSize());
Stack.print();

console.log(Stack.pop());
console.log(Stack.peek());
Stack.print();
