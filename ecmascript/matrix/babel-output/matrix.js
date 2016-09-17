'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Matrix = function Matrix(str) {
  var rows = str.split('\n').map(function (n) {
    return n.split(' ').map(Number);
  });
  var columns = rows[0].map(function (_, i) {
    return rows.map(function (n) {
      return n[i];
    });
  });

  return Object.freeze({ rows: rows, columns: columns });
};

exports['default'] = Matrix;
module.exports = exports['default'];