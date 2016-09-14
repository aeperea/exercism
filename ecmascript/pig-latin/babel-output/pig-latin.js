"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PigLatin = (function () {
  function PigLatin() {
    _classCallCheck(this, PigLatin);
  }

  _createClass(PigLatin, [{
    key: "translate",
    value: function translate(phrase) {
      var _this = this;

      return phrase.split(" ").map(function (word) {
        if (/[aeiouy]/.test(word[0])) {
          return word + 'ay';
        }
        return _this.separateConsonant(word);
      }).join(" ");
    }
  }, {
    key: "separateConsonant",
    value: function separateConsonant(word) {
      var newWord = '';
      var lastLetter = '';

      for (var i = 0; i < word.length; i++) {
        var letter = word[i];
        if (/[^aeiouy]/.test(letter)) {
          newWord += letter;
        } else {
          lastLetter = newWord[newWord.length - 1];
          if (letter === 'u' && lastLetter === 'q') {
            newWord += letter;
          } else {
            break;
          }
        }
      }
      return word.split(newWord)[1] + newWord + 'ay';
    }
  }]);

  return PigLatin;
})();

exports["default"] = PigLatin;
module.exports = exports["default"];