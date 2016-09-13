"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sieve = (function () {
  function Sieve(n) {
    _classCallCheck(this, Sieve);

    this.n = n;
  }

  _createClass(Sieve, [{
    key: "calculateSieve",
    value: function calculateSieve(i, list) {
      if (this.n < 2) return [];
      if (i === this.n) return list;

      var newList = [];
      list.forEach(function (n) {
        (n === i || n % i) == 0 ? null : newList.push(n);
      });
      return this.calculateSieve(i + 1, newList);
    }
  }, {
    key: "primes",
    get: function get() {
      var list = [].concat(_toConsumableArray(Array(this.n + 1).keys())).slice(2);
      return this.calculateSieve(2, list);
    }
  }]);

  return Sieve;
})();

exports["default"] = Sieve;
module.exports = exports["default"];