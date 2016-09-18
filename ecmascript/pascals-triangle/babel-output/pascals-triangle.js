"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var binomial = function binomial(n, k) {
  var tot = 1;
  for (var i = 1; i <= k; i++) {
    tot *= (n + 1 - i) / i;
  }
  return parseInt(tot);
};

var Triangle = function Triangle(n) {
  var totalRows = n;
  var rows = [];

  for (var row = 0; row < totalRows; row++) {
    rows[row] = [];
    for (var i = 0; i <= row; i++) {
      rows[row][i] = binomial(row, i);
    }
  }
  var lastRow = rows[totalRows - 1];

  return {
    rows: rows,
    lastRow: lastRow
  };
};

exports["default"] = Triangle;
module.exports = exports["default"];