class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return !this.isEmpty() ? this.items[0] : null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(50);
queue.enqueue(90);
queue.enqueue(30);

queue.enqueue();

console.log(queue.isEmpty());

console.log(queue.peek());

console.log(queue.size());

queue.print();

// Big-O = O(n) - Linear

/*=================================
// Queue Implementation Optimised
====================================*/

class Queue2 {
  constructor() {
    this.items = [];
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
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

const queue2 = new Queue2();

queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(50);
queue2.enqueue(90);
queue2.enqueue(30);

queue2.enqueue();

console.log(queue2.isEmpty());

console.log(queue2.peek());

console.log(queue2.size());

queue2.print();

// Big-O = O(1) - Constant
