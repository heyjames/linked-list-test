const StackNode = require("./StackNode");

module.exports = class Stack {
  constructor() {
    this.top = null;
    this.stackSize = 0;
  }

  pop() {
    if (this.top === null) return console.log("Pop failed: Empty stack.");

    let item = this.top.data;
    this.top = this.top.next;
    this.stackSize--;

    return item;
  }

  push(item) {
    let t = new StackNode(item);
    t.next = this.top;
    this.top = t;
    this.stackSize++;
  }

  peek() {
    if (this.top === null) return console.log("Peek failed: Empty stack.");

    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }

  size() {
    return this.stackSize;
  }
};
