"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pangram = (function () {
  function Pangram(phrase) {
    _classCallCheck(this, Pangram);

    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    this.phrase = phrase.toLowerCase();
    this.letterCounter = [].concat(_toConsumableArray(alphabet)).reduce(function (o, v) {
      o[v] = 0;return o;
    }, {});
  }

  _createClass(Pangram, [{
    key: "updateLetterCounts",
    value: function updateLetterCounts() {
      var _this = this;

      [].concat(_toConsumableArray(this.phrase)).forEach(function (letter) {
        if (typeof _this.letterCounter[letter] !== "undefined") {
          _this.letterCounter[letter]++;
        }
      });
    }
  }, {
    key: "isPangram",
    value: function isPangram() {
      if (this.phrase.length === 0) {
        return false;
      }
      this.updateLetterCounts();

      var noZero = true;
      Object.values(this.letterCounter).forEach(function (counts) {
        if (counts === 0) {
          noZero = false;
        }
      });
      return noZero;
    }
  }]);

  return Pangram;
})();

exports["default"] = Pangram;
module.exports = exports["default"];