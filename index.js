const Stack = require("./Stack");
const Queue = require("./Queue");
const MyQueue = require("./MyQueue");

let queueViaStacks = new MyQueue();
// console.log(queueViaStacks.size());
queueViaStacks.add("abc");
queueViaStacks.add("jkl");
queueViaStacks.add("xyz");
console.log(queueViaStacks.test());
console.log(queueViaStacks.test2());
// console.log(`peek(): ${queueViaStacks.peek()}`);
console.log(`remove(): ${queueViaStacks.remove()}`);
// queueViaStacks.remove();
console.log(queueViaStacks.test());
console.log(queueViaStacks.test2());
// console.log(queueViaStacks.size());

// let myStack = new Stack();
// myStack.push("abc");
// myStack.push("jkl");
// myStack.push("xyz");
// console.log(myStack.getSize());
// console.log(myStack.pop());
// console.log(myStack.getSize());
// console.log(myStack.peek());

// let myQueue = new Queue();
// console.log(myQueue.peek());
// myQueue.add("abc");
// myQueue.add("jkl");
// myQueue.add("xyz");
// console.log(myQueue.pop());
// console.log(myQueue.pop());
// console.log(myQueue.peek());
// console.log(myQueue.isEmpty());
