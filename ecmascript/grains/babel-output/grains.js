'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _bigInteger = require('./big-integer');

var _bigInteger2 = _interopRequireDefault(_bigInteger);

var Grains = (function () {
  function Grains() {
    _classCallCheck(this, Grains);
  }

  _createClass(Grains, [{
    key: 'square',
    value: function square(n) {
      return String((0, _bigInteger2['default'])(2).pow(n - 1));
    }
  }, {
    key: 'total',
    value: function total() {
      var total = (0, _bigInteger2['default'])(this.square(65)).minus(1);
      return String(total);
    }
  }]);

  return Grains;
})();

exports['default'] = Grains;
module.exports = exports['default'];