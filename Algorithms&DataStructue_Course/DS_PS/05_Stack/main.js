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

const stack = new Stack();
stack.push(50);
stack.push(40);
stack.push(60);
stack.push(80);

console.log(stack.pop());

console.log(stack.size());

console.log(stack.peek());

console.log(stack.isEmpty());

stack.print();

console.log(stack.items);

// Big-O = O(1) - Constantx
