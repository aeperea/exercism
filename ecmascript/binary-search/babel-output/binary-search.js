"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isSorted = function isSorted(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
};

var BinarySearch = function BinarySearch(arr) {
  if (!isSorted(arr)) {
    return;
  }

  var indexOf = function indexOf(n) {
    var size = arr.length;
    var min = 0;
    var max = size - 1;
    var middle = Math.floor((max + min) / 2);
    var last = null;
    var last2 = null;

    while (true) {
      if (arr[middle] === n) {
        return middle;
      }

      if (arr[middle] < n) {
        max = size - 1;
        min = middle;
        middle = Math.floor((max + min) / 2);
      } else {
        max = middle;
        min = 0;
        middle = Math.floor((max + min) / 2);
      }
      if (last2 === middle) {
        return -1;
      }
      last2 = last;
      last = middle;
    }
  };

  return {
    array: arr,
    indexOf: indexOf
  };
};

exports["default"] = BinarySearch;
module.exports = exports["default"];