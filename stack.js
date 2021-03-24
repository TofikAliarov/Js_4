class Stack {
  constructor(length = 10) {
    if (isNaN(length)) {
      throw new Error("not a  number");
    }
    this.arr = [];
    this.length = length;
  }

  push(elem) {
    if (this.arr.length >= this.length) {
      throw new Error("Stack is full");
    }
    this.arr.push(elem);
  }
  pop() {
    if (this.arr.length === 0) {
      throw new Error("Stack is empty");
    }
    this.arr.pop();
  }
  peek() {
    const lastEl = this.arr[this.arr.length - 1];
    return lastEl;
  }
  isEmpty() {
    if (this.arr.length === 0) {
      return true;
    }
    return false;
  }
  toArray() {
    const newArr = Array.from(this.arr);
    return newArr;
  }
  static fromIterable(iterable) {
    if (!Array.isArray(iterable)) {
      throw new Error("Not a stack");
    }
    const iterableArr = new Stack(iterable.length);
    iterable.forEach((el) => iterableArr.push(el));

    return iterableArr;
  }
}
