'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Matrix = function Matrix(str) {
  var matrix = str.split('\n').map(function (n) {
    return n.split(' ').map(Number);
  });

  var transpose = [];
  for (var i = 0; i < matrix[0].length; i++) {
    transpose[i] = [];
    for (var j = 0; j < matrix.length; j++) {
      transpose[i].push(matrix[j][i]);
    }
  }

  return {
    rows: matrix,
    columns: transpose
  };
};

exports['default'] = Matrix;
module.exports = exports['default'];