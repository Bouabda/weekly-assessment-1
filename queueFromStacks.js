////////////////////////////////////////////////////////////
// This is an implementation of a Stack using ECMAScript 6
////////////////////////////////////////////////////////////
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

////////////////////////////////////////////////////////////
// Implement a Queue using Stacks using EcmaScript 6 Syntax
////////////////////////////////////////////////////////////

// takes an array of data : FIFO 
class Queue {
  constructor() {
      this.rear = 0 ;
      this.front = 0 ;
      this.storage = [];
  }
  enqueue(value) {
  this.storage[this.rear] = value;
  this.rear ++
  };
  
  dequeue() {
    var deletedValue = this.storage[this.front] ;
      if (this.rear > 0) {
       delete this.storage[this.front] ;
       this.storage[this.front] = this.storage[this.rear-1] ;
       delete this.storage[this.rear-1] ;
       this.rear -- ;
      } return deletedValue ;
  
  }
  
  size () {
    return this.rear - this.front ;
    }
  }
