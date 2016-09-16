"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkedList = (function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.nodes = [];
  }

  _createClass(LinkedList, [{
    key: "shift",
    value: function shift() {
      return this.nodes.shift();
    }
  }, {
    key: "unshift",
    value: function unshift(n) {
      this.nodes.unshift(n);
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.nodes.pop();
    }
  }, {
    key: "push",
    value: function push(n) {
      this.nodes.push(n);
    }
  }, {
    key: "delete",
    value: function _delete(n) {
      var i = this.nodes.indexOf(n);
      if (i < 0) {
        return;
      }
      this.nodes.splice(i, 1);
    }
  }, {
    key: "count",
    value: function count() {
      return this.nodes.length;
    }
  }]);

  return LinkedList;
})();

exports["default"] = LinkedList;
module.exports = exports["default"];