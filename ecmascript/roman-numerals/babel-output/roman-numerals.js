'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

exports['default'] = function (num) {
  var romanNum = [];
  var reversedNum = [].concat(_toConsumableArray(num.toString())).reverse();
  var maxOrder = reversedNum.length;
  for (var order = 3; order >= 0; order--) {
    if (order < maxOrder) {
      romanNum.push(getRomanNumber(Number(reversedNum[order]), order));
    }
  }
  return romanNum.join("");
};

var getRomanNumber = function getRomanNumber(n, order) {
  var romanChars = numerals(order);
  if (n <= 3) {
    return mult(romanChars['one'], n);
  }
  if (n == 4) {
    return romanChars['one'] + romanChars['five'];
  }
  if (n <= 8) {
    return romanChars['five'] + mult(romanChars['one'], n - 5);
  }
  if (n == 9) {
    return romanChars['one'] + romanChars['ten'];
  }
};

var mult = function mult(c, n) {
  var letters = [];
  for (var i = 0; i < n; i++) {
    letters.push(c);
  }
  return letters.join("");
};

var numerals = function numerals(order) {
  if (order === 0) {
    return { one: "I", five: "V", ten: "X" };
  }
  if (order === 1) {
    return { one: "X", five: "L", ten: "C" };
  }
  if (order === 2) {
    return { one: "C", five: "D", ten: "M" };
  }
  if (order === 3) {
    return { one: "M" };
  }
};
module.exports = exports['default'];