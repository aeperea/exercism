'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Triangle = (function () {
  function Triangle(a, b, c) {
    _classCallCheck(this, Triangle);

    this.a = a;
    this.b = b;
    this.c = c;
    this.sides = [a, b, c];
  }

  _createClass(Triangle, [{
    key: 'kind',
    value: function kind() {
      var _this = this;

      this.checkInequality();
      if (this.sides.filter(function (side) {
        return side === _this.a;
      }).length === 3) {
        return 'equilateral';
      }
      if (this.sides.filter(function (side) {
        return side === _this.a;
      }).length === 2 || this.sides.filter(function (side) {
        return side === _this.b;
      }).length === 2) {
        return 'isosceles';
      }
      return 'scalene';
    }
  }, {
    key: 'checkInequality',
    value: function checkInequality() {
      if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
        throw new Error();
        return;
      }
      if (this.a + this.b < this.c) {
        throw new Error();return;
      }
      if (this.b + this.c < this.a) {
        throw new Error();return;
      }
      if (this.c + this.a < this.b) {
        throw new Error();return;
      }
    }
  }]);

  return Triangle;
})();

exports['default'] = Triangle;
module.exports = exports['default'];