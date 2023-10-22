/**
 * @param {number} capacity
 */

class MyCircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  enQueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
      return true;
    } else {
      return false;
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return true;
  }

  Front() {
    if (this.items[this.front] >= 0) {
      return this.items[this.front];
    } else {
      return -1;
    }
  }

  Rear() {
    if (this.items[this.rear] >= 0) {
      return this.items[this.rear];
    } else {
      return -1;
    }
  }
}

const myCircularQueue = new MyCircularQueue(3);
console.log(myCircularQueue.enQueue(1)); // return True
console.log(myCircularQueue.enQueue(2)); // return True
console.log(myCircularQueue.enQueue(3)); // return True
console.log(myCircularQueue.enQueue(4)); // return False
console.log(myCircularQueue.Rear()); // return 3
console.log(myCircularQueue.isFull()); // return True
console.log(myCircularQueue.deQueue()); // return True
console.log(myCircularQueue.enQueue(4)); // return True
console.log(myCircularQueue.Rear()); // return 4

console.log("=====================================");

const myCircularQueue2 = new MyCircularQueue(6); // null
console.log(myCircularQueue2.enQueue(6)); // return true
console.log(myCircularQueue2.Rear()); // return 6
console.log(myCircularQueue2.Rear()); // return 6
console.log(myCircularQueue2.deQueue()); // return true
console.log(myCircularQueue2.enQueue(5)); // return True
console.log(myCircularQueue2.Rear()); // return 5
console.log(myCircularQueue2.deQueue()); // return true
console.log(myCircularQueue2.Front()); // return -1
console.log(myCircularQueue2.deQueue()); // return false
console.log(myCircularQueue2.deQueue()); // return false
console.log(myCircularQueue2.deQueue()); // return false
