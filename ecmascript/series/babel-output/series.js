'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Series = (function () {
  function Series(n) {
    _classCallCheck(this, Series);

    this.n = n;
    this.digits = [].concat(_toConsumableArray(n)).map(Number);
  }

  _createClass(Series, [{
    key: 'slices',
    value: function slices(n) {
      if (n > this.n.length) {
        throw new Error('Slice size is too big.');return;
      }
      var morceux = [];
      for (var i = 0; i <= this.n.length - n; i++) {
        morceux.push([].concat(_toConsumableArray(this.n.slice(i, i + n))).map(Number));
      }
      return morceux;
    }
  }]);

  return Series;
})();

exports['default'] = Series;
module.exports = exports['default'];