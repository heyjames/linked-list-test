const QueueNode = require("./QueueNode");

module.exports = class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  add(item) {
    let t = new QueueNode(item);

    if (this.last != null) {
      this.last.next = t;
    }

    this.last = t;

    if (this.first === null) {
      this.first = this.last;
    }
  }

  pop() {
    let item = this.first.data;
    this.first = this.first.next;
    return item;
  }

  peek() {
    if (this.first === null) return console.log("Nothing to peek.");
    return this.first.data;
  }

  isEmpty() {
    return this.first === null;
  }
};
