const Queue = require("./Queue");
const Stack = require("./Stack");

module.exports = class MyQueue {
  constructor() {
    this.newStack = new Stack();
    this.oldStack = new Stack();
  }

  add(item) {
    this.newStack.push(item);
  }

  size() {
    return this.newStack.size() + this.oldStack.size();
  }

  shiftStacks() {
    if (this.oldStack.isEmpty()) {
      while (!this.newStack.isEmpty()) {
        this.oldStack.push(this.newStack.pop());
      }
    }
  }

  peek() {
    this.shiftStacks();
    return this.oldStack.peek();
  }

  remove() {
    this.shiftStacks();
    return this.oldStack.pop();
  }

  test() {
    return this.newStack;
  }

  test2() {
    return this.oldStack;
  }
};
