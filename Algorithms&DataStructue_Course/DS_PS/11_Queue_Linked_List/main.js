const LinkedList = require("./linked-list");

class QueueLinkedList {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
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

const queue = new QueueLinkedList();

console.log(queue.isEmpty());
console.log("==========");

queue.enqueue(30);
queue.enqueue(20);
queue.enqueue(10);
queue.print();
console.log("==========");

console.log(queue.getSize());

console.log("==========");
queue.dequeue();
queue.print();
console.log("==========");

console.log(queue.peek());
