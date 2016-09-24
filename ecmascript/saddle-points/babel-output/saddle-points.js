'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var max = function max(arr) {
  return Math.max.apply(Math, arr);
};
var min = function min(arr) {
  return Math.min.apply(Math, arr);
};

var Matrix = function Matrix(str) {

  var rows = str.split('\n').map(function (n) {
    return n.split(' ').map(Number);
  });
  var columns = rows[0].map(function (_, i) {
    return rows.map(function (n) {
      return n[i];
    });
  });
  var saddlePoints = [];

  var getSaddlePoints = (function () {
    rows.forEach(function (row, i) {
      var largest = max(row);
      row.forEach(function (el, j) {
        if (el === largest) {
          var smallest = min(columns[j]);
          if (smallest === el) {
            saddlePoints.push([i, j]);
          }
        }
      });
    });
  })();

  return {
    rows: rows,
    columns: columns,
    saddlePoints: saddlePoints
  };
};

exports['default'] = Matrix;
module.exports = exports['default'];