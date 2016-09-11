"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Anagram = (function () {
  function Anagram(word) {
    _classCallCheck(this, Anagram);

    this.word = word.toLowerCase();
  }

  _createClass(Anagram, [{
    key: "matches",
    value: function matches(wordList) {
      var _this = this;

      if (typeof wordList !== "object") {
        wordList = Object.values(arguments);
      }

      var matches = [];
      wordList.forEach(function (word) {
        var smallWord = word.toLowerCase();

        if (smallWord.length !== _this.word.length) {
          return;
        }
        if (smallWord === _this.word) {
          return;
        }

        if (_this.order(smallWord) === _this.order(_this.word)) {
          matches.push(word);
        }
      });

      return matches;
    }
  }, {
    key: "order",
    value: function order(string) {
      return string.split("").sort(function (a, b) {
        return a > b;
      }).join("");
    }
  }]);

  return Anagram;
})();

exports["default"] = Anagram;
module.exports = exports["default"];