module.exports = class QueueNode {
  constructor(data = null) {
    this.data = data;
    this.next = null
  }
}