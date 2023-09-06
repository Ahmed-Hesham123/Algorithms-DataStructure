# Cicular Queue

_The size of the queue is fixed and a single block of memory is used as if the first element is connected to last element._

- Also reffered to as circular buffer or ring buffer and follows the (FIFO) principle.
- A cicular queue will reuse the empty block created during the dequeue operation.
- When working with queues of fixed maximum size, a circular queue is a great implementation choice.
- The Circular Queue data strucure supports two main operations:
  -- Enqueue => Which adds an element to the rear/tail of the collection.
  -- Dequeue => Which removes an element from front/head of the collection.

## Queue Usage

- Clock.
- Streaming data.
- Traffic lights.

### Queue Implementation 

- Enqueue => add an element to the queue.
- Dequeue => remove the oldest element from the queue.
- isFull  => check if the queue is full.
- isEmpty => check if the queue is empty.
- Peek    => get the value of the element at the front of the queue without removing it.
- Size    => get the number of elements in the queue.
- Print   => visualize the elements in the queue.

### EX:

  <code>
  </code>

$$Big-O = O(1) - Constant$$
