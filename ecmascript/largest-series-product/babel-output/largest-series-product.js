'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Series = (function () {
  function Series(n) {
    _classCallCheck(this, Series);

    this.n = n;
  }

  _createClass(Series, [{
    key: 'validate',
    value: function validate(input, number) {
      if (/[^0-9]/g.test(this.n)) {
        throw new Error('Invalid input.');
      }
      if (number < 0) {
        throw new Error('Invalid input.');
      }
      if (number > input.length) {
        throw new Error('Slice size is too big.');
      }
    }
  }, {
    key: 'largestProduct',
    value: function largestProduct(n) {
      this.validate(this.n, n);

      var max = 0;
      for (var i = 0; i <= this.n.length - n; i++) {
        var maxLoop = 1;
        for (var j = i; j < i + n; j++) {
          maxLoop *= Number(this.n[j]);
        }
        max = Math.max(maxLoop, max);
      }

      return max;
    }
  }]);

  return Series;
})();

exports['default'] = Series;
module.exports = exports['default'];