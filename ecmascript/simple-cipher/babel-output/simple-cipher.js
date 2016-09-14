'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var alph = 'abcdefghijklmnopqrstuvwxyz';
var rndm = function rndm(n) {
  return Math.floor(Math.random() * n);
};
var mod = function mod(x, y) {
  return (x % y + y) % y;
};

var offset = function offset(i, key) {
  return alph.indexOf(key[i]);
};
var shift = function shift(c, n) {
  return alph[mod(alph.indexOf(c) + n, alph.length)];
};

var Cipher = (function () {
  function Cipher() {
    var key = arguments.length <= 0 || arguments[0] === undefined ? this.generateKey() : arguments[0];

    _classCallCheck(this, Cipher);

    if (this.checkGoodKey(key)) {
      this.key = key;
    } else {
      throw new Error('Bad key');
    }
  }

  _createClass(Cipher, [{
    key: 'generateKey',
    value: function generateKey() {
      var key = [];
      var keySize = 100;
      for (var i = 0; i < keySize; i++) {
        key.push(alph[rndm(26)]);
      }
      return key.join('');
    }
  }, {
    key: 'checkGoodKey',
    value: function checkGoodKey(key) {
      return (/[a-z]+/.test(key)
      );
    }
  }, {
    key: 'encode',
    value: function encode(message) {
      var _this = this;

      return [].concat(_toConsumableArray(message)).map(function (c, i) {
        return shift(c, offset(i, _this.key));
      }).join('');
    }
  }, {
    key: 'decode',
    value: function decode(message) {
      var _this2 = this;

      return [].concat(_toConsumableArray(message)).map(function (c, i) {
        return shift(c, -offset(i, _this2.key));
      }).join('');
    }
  }]);

  return Cipher;
})();

exports['default'] = Cipher;
module.exports = exports['default'];