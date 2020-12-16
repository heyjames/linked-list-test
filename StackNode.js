module.exports = class StackNode {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}