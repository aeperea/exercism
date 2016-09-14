"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Squares = function Squares(n) {
  _classCallCheck(this, Squares);

  this.n = n;
  this.arr = [].concat(_toConsumableArray(Array(n + 1).keys())).slice(1, n + 1);
  this.sumOfSquares = this.arr.reduce(function (o, v) {
    return o + v * v;
  }, 0);
  this.squareOfSums = Math.pow(this.arr.reduce(function (o, v) {
    return o + v;
  }, 0), 2);
  this.difference = this.squareOfSums - this.sumOfSquares;
};

exports["default"] = Squares;
module.exports = exports["default"];