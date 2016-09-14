"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isEven = function isEven(n) {
  return n % 2 === 0;
};
var isOdd = function isOdd(n) {
  return !isEven(n);
};

var Luhn = (function () {
  function Luhn(n) {
    _classCallCheck(this, Luhn);

    this.n = n.toString();
  }

  _createClass(Luhn, [{
    key: "computeDigits",
    value: function computeDigits(n, func) {
      var _this = this;

      return [].concat(_toConsumableArray(n.toString())).reverse().map(function (digit, i) {
        if (func(i)) {
          return _this.sumDigits(2 * Number(digit));
        }
        return Number(digit);
      }).reverse();
    }
  }, {
    key: "sumDigits",
    value: function sumDigits(n) {
      if (n < 10) {
        return n;
      };
      return [].concat(_toConsumableArray(n.toString())).reduce(function (o, v) {
        return o + Number(v);
      }, 0);
    }
  }, {
    key: "checkDigit",
    get: function get() {
      var size = this.n.length;
      return Number(this.n[size - 1]);
    }
  }, {
    key: "addends",
    get: function get() {
      return this.computeDigits(this.n, isOdd);
    }
  }, {
    key: "checksum",
    get: function get() {
      var digitString = this.computeDigits(this.n, isOdd).join("");
      return this.sumDigits(Number(digitString));
    }
  }, {
    key: "valid",
    get: function get() {
      return this.checksum % 10 === 0;
    }
  }], [{
    key: "create",
    value: function create(n) {
      var digitString = this.prototype.computeDigits(n, isEven).join("");
      var checkSum = this.prototype.sumDigits(Number(digitString));

      var mod10 = checkSum % 10;
      if (mod10 === 0) {
        return Number(n.toString() + mod10);
      } else {
        return Number(n.toString() + (10 - mod10));
      }
    }
  }]);

  return Luhn;
})();

exports["default"] = Luhn;
module.exports = exports["default"];