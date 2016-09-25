'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

exports['default'] = function (str) {
  var openedBracks = [];
  var counts = [0, 0, 0];

  [].concat(_toConsumableArray(str)).forEach(function (c) {
    if (c === '{') {
      openedBracks.push(c);counts[0]++;
    }
    if (c === '}') {
      checkLast(c, openedBracks);counts[0]--;
    }
    if (c === '[') {
      openedBracks.push(c);counts[1]++;
    }
    if (c === ']') {
      checkLast(c, openedBracks);counts[1]--;
    }
    if (c === '(') {
      openedBracks.push(c);counts[2]++;
    }
    if (c === ')') {
      checkLast(c, openedBracks);counts[2]--;
    }
  });

  return openedBracks.length === 0 && sum(counts) === 0;
};

var checkLast = function checkLast(bracket, opened) {
  var lastOpen = opened[opened.length - 1];
  if (lastOpen === '{' && bracket === '}') {
    opened.pop();return;
  }
  if (lastOpen === '[' && bracket === ']') {
    opened.pop();return;
  }
  if (lastOpen === '(' && bracket === ')') {
    opened.pop();return;
  }
};

var sum = function sum(arr) {
  return arr.reduce(function (o, v) {
    return o + v;
  }, 0);
};
module.exports = exports['default'];