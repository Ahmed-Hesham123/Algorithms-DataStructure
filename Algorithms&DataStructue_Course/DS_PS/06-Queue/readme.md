# Queue

_The queue data structure is a sequential collection of elements that follows the principle of first in first out (FIFO)._

- The first element inserted into the queue is the first element to be removed.
- A queue people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head).
- Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model.
- The Queue data strucure supports two main operations:
  -- Enqueue => Which adds an element to the rear/tail of the collection.
  -- Dequeue => Which removes an element from front/head of the collection.

## Queue Usage

- Printers.
- CPU task scheduling.
- Callback queue in JavaScript.

### Queue Implementation 

- Enqueue => add an element to the queue.
- Dequeue => remove the oldest element from the queue.
- Peek    => get the value of the element at the front of the queue without removing it.
- isEmpty => check if the queue is empty.
- Size    => get the number of elements in the queue.
- Print   => visualize the elements in the queue.

### EX:

  <code>
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
  </code>

$$Big-O = O(n) - Linear$$

### Queue Implementation Optimised

  <code>
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
  </code>

$$Big-O = O(1) - Constant$$
