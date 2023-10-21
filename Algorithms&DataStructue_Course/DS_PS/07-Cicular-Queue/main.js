class CicularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    return !this.isEmpty() ? this.items[this.front] : null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
    } else {
      let i,
        str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const cicularQueue = new CicularQueue(5);

console.log(cicularQueue.isEmpty());

cicularQueue.enqueue(10);
cicularQueue.enqueue(20);
cicularQueue.enqueue(30);
cicularQueue.enqueue(40);
cicularQueue.enqueue(50);

console.log(cicularQueue.isFull());

cicularQueue.print();

console.log(cicularQueue.dequeue());
console.log(cicularQueue.peek());

cicularQueue.print();

// Big-O = O(1) - Constant
