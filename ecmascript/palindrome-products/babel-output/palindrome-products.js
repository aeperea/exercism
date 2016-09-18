'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var Factor = function Factor(value, factors) {
  return {
    value: value,
    factors: factors
  };
};

var generate = function generate(_ref) {
  var _ref$minFactor = _ref.minFactor;
  var minFactor = _ref$minFactor === undefined ? 1 : _ref$minFactor;
  var _ref$maxFactor = _ref.maxFactor;
  var maxFactor = _ref$maxFactor === undefined ? Number.MAX_VALUE : _ref$maxFactor;

  var min = Number.MAX_VALUE;
  var max = 0;
  var largest = null;
  var smallest = null;

  for (var i = minFactor; i <= maxFactor; i++) {
    for (var j = minFactor; j <= maxFactor; j++) {
      var n = i * j;
      if (isPal(n)) {
        if (n < min) {
          min = n;
          smallest = new Factor(n, [i, j]);
        }
        if (n > max) {
          max = n;
          largest = new Factor(n, [i, j]);
        }
      }
    }
  }

  return {
    largest: largest,
    smallest: smallest
  };
};

var isPal = function isPal(n) {
  n = n.toString();
  return n === [].concat(_toConsumableArray(n)).reverse().join('');
};

exports['default'] = generate;
module.exports = exports['default'];