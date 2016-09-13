"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  keep: function keep(list, fn) {
    return this.execution(list, fn, true);
  },
  discard: function discard(list, fn) {
    return this.execution(list, fn, false);
  },
  execution: function execution(list, fn, condition) {
    var match = [];
    list.forEach(function (el) {
      if (fn(el) === condition) {
        match.push(el);
      }
    });
    return match;
  }
};
module.exports = exports["default"];