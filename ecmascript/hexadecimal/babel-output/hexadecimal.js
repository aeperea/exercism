"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var Hexadecimal = function Hexadecimal(n) {

  var toDecimal = function toDecimal() {
    if (!isHex(n)) {
      return 0;
    }
    return [].concat(_toConsumableArray(n)).reverse().reduce(function (o, v, i) {
      var coef = 0;
      if (/^[0-9]+$/.test(v)) {
        coef = Number(v);
      } else {
        coef = v.charCodeAt(0) - 87;
      }
      return o + coef * Math.pow(16, i);
    }, 0);
  };

  var isHex = function isHex(n) {
    return (/^([0-9]|[a-f])+$/.test(n)
    );
  };

  return {
    toDecimal: toDecimal
  };
};

exports["default"] = Hexadecimal;
module.exports = exports["default"];