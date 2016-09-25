'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Isogram = (function () {
  function Isogram(word) {
    _classCallCheck(this, Isogram);

    this.word = word;
  }

  _createClass(Isogram, [{
    key: 'isIsogram',
    value: function isIsogram() {
      var isIt = true;
      var letters = [];
      this.word.toLowerCase().replace(/[- ]/g, '').split('').forEach(function (l) {
        if (letters.indexOf(l) >= 0) {
          isIt = false;
        }
        letters.push(l);
      });
      return isIt;
    }
  }]);

  return Isogram;
})();

exports['default'] = Isogram;
module.exports = exports['default'];