"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Anagram = (function () {
  function Anagram(word) {
    _classCallCheck(this, Anagram);

    this.word = word;
  }

  _createClass(Anagram, [{
    key: "matches",
    value: function matches() {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var wordList = args[0].constructor === Array ? args[0] : args;
      return wordList.filter(function (word) {
        return _this.word.toLowerCase() !== word.toLowerCase() && _this.word.length === word.length && _this.sort(_this.word) === _this.sort(word);
      });
    }
  }, {
    key: "sort",
    value: function sort(string) {
      return string.toLowerCase().split("").sort().join("");
    }
  }]);

  return Anagram;
})();

exports["default"] = Anagram;
module.exports = exports["default"];