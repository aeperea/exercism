"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Trinary = (function () {
  function Trinary(n) {
    _classCallCheck(this, Trinary);

    this.n = n;
  }

  _createClass(Trinary, [{
    key: "isTrinary",
    value: function isTrinary(n) {
      var re = /^[012]+$/;
      return re.test(n);
    }
  }, {
    key: "toDecimal",
    value: function toDecimal() {
      if (!this.isTrinary(this.n)) {
        return 0;
      }

      return [].concat(_toConsumableArray(this.n)).reverse().reduce(function (o, v, i) {
        return o + Number(v) * Math.pow(3, i);
      }, 0);
    }
  }]);

  return Trinary;
})();

exports["default"] = Trinary;
module.exports = exports["default"];