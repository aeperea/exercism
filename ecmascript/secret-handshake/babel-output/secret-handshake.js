'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var maps = ['wink', 'double blink', 'close your eyes', 'jump', 'reverse'];

var SecretHandshake = (function () {
  function SecretHandshake(hex) {
    _classCallCheck(this, SecretHandshake);

    if (this.check(hex)) {
      return;
    }
    this.hex = hex;
  }

  _createClass(SecretHandshake, [{
    key: 'check',
    value: function check(hex) {
      if (typeof hex !== 'number') {
        throw new Error('Handshake must be a number');
      }
      return false;
    }
  }, {
    key: 'commands',
    value: function commands() {
      var bin = parseInt(this.hex, 16).toString(2);
      var willReverse = false;
      var sequence = [];

      [].concat(_toConsumableArray(bin)).reverse().map(function (b, i) {
        if (b === '1') {
          if (i < 4) {
            sequence.push(maps[i]);
          } else {
            willReverse = true;
          }
        }
      });
      if (willReverse) {
        return sequence.reverse();
      }
      return sequence;
    }
  }]);

  return SecretHandshake;
})();

exports['default'] = SecretHandshake;
module.exports = exports['default'];