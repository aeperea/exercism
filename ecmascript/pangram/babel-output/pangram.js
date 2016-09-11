'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Pangram = (function () {
  function Pangram() {
    var phrase = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    _classCallCheck(this, Pangram);

    this.alphabet = [].concat(_toConsumableArray('abcdefghijklmnopqrstuvwxyz'));
    this.phrase = [].concat(_toConsumableArray(phrase.toLowerCase()));
  }

  _createClass(Pangram, [{
    key: 'isPangram',
    value: function isPangram() {
      var _this = this;

      if (this.phrase.length === 0) {
        return false;
      }

      var noZero = true;
      this.alphabet.forEach(function (letter) {
        if (!_this.phrase.includes(letter)) {
          noZero = false;
          return noZero;
        }
      });

      return noZero;
    }
  }]);

  return Pangram;
})();

exports['default'] = Pangram;
module.exports = exports['default'];