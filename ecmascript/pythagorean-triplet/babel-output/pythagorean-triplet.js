'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Triplet = (function () {
  function Triplet(a, b, c) {
    _classCallCheck(this, Triplet);

    this.sides = [a, b, c];
  }

  _createClass(Triplet, [{
    key: 'sum',
    value: function sum() {
      var list = arguments.length <= 0 || arguments[0] === undefined ? this.sides : arguments[0];

      return list.reduce(function (o, v) {
        return o + v;
      }, 0);
    }
  }, {
    key: 'product',
    value: function product() {
      var list = arguments.length <= 0 || arguments[0] === undefined ? this.sides : arguments[0];

      return list.reduce(function (o, v) {
        return o * v;
      }, 1);
    }
  }, {
    key: 'sumOfSquares',
    value: function sumOfSquares() {
      var list = arguments.length <= 0 || arguments[0] === undefined ? this.sides : arguments[0];

      return list.reduce(function (o, v) {
        return o + v * v;
      }, 0);
    }
  }, {
    key: 'isPythagorean',
    value: function isPythagorean() {
      var c = Math.max.apply(Math, this.sides);
      return this.sumOfSquares() - 2 * c * c === 0;
    }
  }], [{
    key: 'where',
    value: function where() {
      var opts = arguments.length <= 0 || arguments[0] === undefined ? { sum: false, minFactor: 1, maxFactor: false } : arguments[0];

      if (!opts.maxFactor) {
        throw new Error('Need max factor!');return;
      }
      var maxFactor = opts.maxFactor;
      var minFactor = opts.minFactor || 1;
      var sum = opts.sum || false;

      var triplets = [];
      for (var a = minFactor; a < maxFactor; a++) {
        for (var b = a; b < maxFactor; b++) {
          var c = Math.sqrt(a * a + b * b);
          if (c >= minFactor && c <= maxFactor) {
            if (sum === false && c % 1 === 0) {
              triplets.push(new Triplet(a, b, c));
            } else if (this.prototype.sum([a, b, c]) === sum) {
              triplets.push(new Triplet(a, b, c));
            }
          }
        }
      }
      return triplets;
    }
  }]);

  return Triplet;
})();

exports['default'] = Triplet;
module.exports = exports['default'];