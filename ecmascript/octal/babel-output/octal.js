// export default class Octal {
//   constructor(n){
//     this.n = n;
//   }
//   toDecimal(){
//     if (!this.isOctal(this.n)) { return 0; }
//     return [...this.n].reverse().reduce((o,v,i) => {
//       return o + Number(v) * Math.pow(8,i);
//     }, 0);
//   }
//   isOctal(n){
//   }
// }

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var Octal = function Octal(n) {
  var isOctal = function isOctal(n) {
    return (/^[0-7]+$/.test(n)
    );
  };

  var toDecimal = function toDecimal() {
    if (!isOctal(n)) {
      return 0;
    }
    return [].concat(_toConsumableArray(n)).reverse().reduce(function (o, v, i) {
      return o + Number(v) * Math.pow(8, i);
    }, 0);
  };
  return { toDecimal: toDecimal };
};

exports["default"] = Octal;
module.exports = exports["default"];