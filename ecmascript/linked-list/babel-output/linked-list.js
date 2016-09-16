"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Node = function Node(val) {
  var prev = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var next = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  return {
    val: val,
    prev: prev,
    next: next
  };
};

var LinkedList = function LinkedList() {
  var head = null,
      tail = null,
      size = 0;

  var push = function push(n) {
    head ? tail = tail.next = new Node(n, tail, null) : head = tail = new Node(n);
    size++;
  };

  var pop = function pop() {
    if (size === 0) {
      return undefinded;
    }

    var val = tail.val;
    if (tail.prev) {
      tail.prev.next = null;
    }
    tail = tail.prev;
    if (!tail) {
      head = null;
    }
    size--;

    return val;
  };

  var unshift = function unshift(val) {
    head ? head = head.prev = new Node(val, null, head) : head = tail = new Node(val);
    size++;
  };

  var shift = function shift() {
    if (size === 0) return undefined;

    var val = head.val;
    if (head.next) head.next.prev = null;
    head = head.next;
    if (!head) tail = null;
    size--;

    return val;
  };

  var remove = function remove(val) {
    var current = head;
    while (current) {
      if (current.val === val) {
        current.prev ? current.prev.next = current.next : head = head.next;
        current.next ? current.next.prev = current.prev : tail = tail.prev;
        size--;
        break;
      }
      current = current.next;
    }
  };

  return {
    push: push, pop: pop, shift: shift, unshift: unshift,
    "delete": remove,
    count: function count() {
      return size;
    }
  };
};

exports["default"] = LinkedList;
module.exports = exports["default"];