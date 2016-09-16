"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value) {
  var prev = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var next = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  _classCallCheck(this, Node);

  this.prev = prev;
  this.next = next;
  this.value = value;
};

var LinkedList = (function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  _createClass(LinkedList, [{
    key: "push",
    value: function push(n) {
      this.head ? this.tail = this.tail.next = new Node(n, this.tail) : this.head = this.tail = new Node(n);
      this.size++;
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.size === 0) {
        return undefined;
      };
      var value = this.tail.value;

      if (this.tail.prev) {
        this.tail.prev.next = null;
      }
      this.tail = this.tail.prev;
      if (!this.tail) {
        this.head = null;
      }
      this.size--;
      return value;
    }
  }, {
    key: "unshift",
    value: function unshift(n) {
      this.head ? this.head = this.head.prev = new Node(n, null, this.head) : this.head = this.tail = new Node(n);
      this.size++;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.size === 0) {
        return undefined;
      };
      var value = this.head.value;

      if (this.head.next) {
        this.head.next.prev = null;
      }
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.size--;
      return value;
    }
  }, {
    key: "delete",
    value: function _delete(val) {
      var current = this.head;
      while (current != null) {
        if (current.value === val) {
          current.prev ? current.prev.next = current.next : this.head = this.head.next;
          current.next ? current.next.prev = current.prev : this.tail = this.tail.prev;
          this.size--;
          break;
        }
        current = current.next;
      }
    }
  }, {
    key: "count",
    value: function count() {
      return this.size;
    }
  }]);

  return LinkedList;
})();

exports["default"] = LinkedList;
module.exports = exports["default"];