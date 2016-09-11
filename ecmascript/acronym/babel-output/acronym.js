"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Acrynoms = (function () {
  function Acrynoms() {
    _classCallCheck(this, Acrynoms);
  }

  _createClass(Acrynoms, null, [{
    key: "upcaseInside",
    value: function upcaseInside(w) {
      var matches = w.match(/[A-Z]/g);
      if (matches && matches.length > 1) {
        return { ok: true, matches: matches.join("") };
      }
      return { ok: false, matches: null };
    }
  }, {
    key: "parse",
    value: function parse(str) {
      var _this = this;

      var separatedWords = str.replace(/[,-:]/, " ").split(/\W+/);
      return separatedWords.map(function (word) {
        if (word.toUpperCase() === word) {
          return word[0].toUpperCase();
        }

        var _upcaseInside = _this.upcaseInside(word);

        var ok = _upcaseInside.ok;
        var matches = _upcaseInside.matches;

        if (ok) {
          return matches;
        }
        return word[0].toUpperCase();
      }).join("");
    }
  }]);

  return Acrynoms;
})();

exports["default"] = Acrynoms;
module.exports = exports["default"];