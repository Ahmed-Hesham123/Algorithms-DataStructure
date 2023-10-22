class MyQueue {
  constructor() {
    this.items = [];
    this.rear = 0;
    this.front = 0;
  }

  push(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  pop() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  empty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}
