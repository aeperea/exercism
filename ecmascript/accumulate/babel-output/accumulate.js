"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (list, fn) {
  var newList = [];
  if (list.length === 0) {
    return newList;
  }
  list.forEach(function (el) {
    newList.push(fn(el));
  });
  return newList;
};

module.exports = exports["default"];