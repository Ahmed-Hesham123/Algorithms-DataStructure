class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  get(index) {
    if (this.isEmpty() || index < 0 || index >= this.size) {
      return -1;
    }

    let i = 0;
    let curr = this.head;
    while (i < index) {
      curr = curr.next;
      i++;
    }
    return curr.value;
  }

  addAtHead(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  addAtTail(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  addAtIndex(index, value) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.addAtHead(value);
    } else if (index === this.size) {
      this.addAtTail(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.size === 1) {
        this.tail = null;
      }
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      prev.next = prev.next.next;
      if (index === this.size - 1) {
        this.tail = prev;
      }
    }
    this.size--;
  }
}
