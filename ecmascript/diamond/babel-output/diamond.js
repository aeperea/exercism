'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Diamond = (function () {
  function Diamond() {
    _classCallCheck(this, Diamond);
  }

  _createClass(Diamond, [{
    key: 'makeDiamond',
    value: function makeDiamond(l) {
      var inputIndex = alphabet.indexOf(l) + 1;
      var diamondSize = 1 + 2 * (inputIndex - 1);
      var letterIndex = 0;
      var resArray = [];

      for (var row = 1; row <= inputIndex; row++) {
        var line = '';
        for (var col = 1; col <= diamondSize; col++) {
          if (row + col - 1 === inputIndex || diamondSize - col + row === inputIndex) {
            line += alphabet[letterIndex];
          } else {
            line += ' ';
          }
        }
        resArray.push(line);
        letterIndex++;
      }

      for (var r = inputIndex - 2; r >= 0; r--) {
        var line = resArray[r];
        resArray.push(line);
      }

      return resArray.join('\n') + '\n';
    }
  }]);

  return Diamond;
})();

exports['default'] = Diamond;

var alphabet = [].concat(_toConsumableArray('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
module.exports = exports['default'];