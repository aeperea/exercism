'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var Matrix = function Matrix(str) {

  var rows = str.split('\n').map(function (n) {
    return n.split(' ').map(Number);
  });
  var columns = rows[0].map(function (_, i) {
    return rows.map(function (n) {
      return n[i];
    });
  });

  var saddlePoints = rows.reduce(function (o, row, i) {
    var max = Math.max.apply(Math, _toConsumableArray(row));
    row.forEach(function (el, j) {
      if (el !== max) return;
      if (Math.min.apply(Math, _toConsumableArray(columns[j])) === el) o.push([i, j]);
    });
    return o;
  }, []);

  return {
    rows: rows,
    columns: columns,
    saddlePoints: saddlePoints
  };
};

exports['default'] = Matrix;
module.exports = exports['default'];