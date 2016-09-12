"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PrimeFactors = (function () {
  function PrimeFactors() {
    _classCallCheck(this, PrimeFactors);
  }

  _createClass(PrimeFactors, [{
    key: "for",
    value: function _for(n) {
      var primes = [];
      var factor = 2;

      while (factor <= n) {
        if (n % factor === 0) {
          primes.push(factor);
          n = n / factor;
        } else {
          factor++;
        }
      }
      return primes;
    }
  }]);

  return PrimeFactors;
})();

exports["default"] = PrimeFactors;
module.exports = exports["default"];