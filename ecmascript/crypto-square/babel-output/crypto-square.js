"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Crypto = (function () {
  function Crypto(str) {
    _classCallCheck(this, Crypto);

    this.str = str.toLowerCase().replace(/[^0-9a-z]/g, '');
    this.calculateSize();
  }

  _createClass(Crypto, [{
    key: "normalizePlaintext",
    value: function normalizePlaintext() {
      return this.str;
    }
  }, {
    key: "size",
    value: function size() {
      if (!this.cols) {
        this.calculateSize();
      }
      return this.cols;
    }
  }, {
    key: "calculateSize",
    value: function calculateSize() {
      var rows = undefined,
          cols = undefined;
      rows = Math.sqrt(this.str.length);
      if (rows === Math.floor(rows)) {
        cols = rows;
      } else {
        rows = Math.floor(rows);
        cols = rows + 1;
      }
      this.cols = cols;
      this.rows = rows;
    }
  }, {
    key: "plaintextSegments",
    value: function plaintextSegments() {
      var cols = this.cols;
      var re = new RegExp("(.{" + cols + "})", "g");
      return this.str.replace(re, "$1 ").trim().split(" ");
    }
  }, {
    key: "ciphertext",
    value: function ciphertext() {
      var cipher = [];
      var segments = this.plaintextSegments();
      for (var i = 0; i < this.cols; i++) {
        for (var j = 0; j < this.cols; j++) {
          cipher.push(segments[j][i]);
        }
      }
      return cipher.join("");
    }
  }]);

  return Crypto;
})();

exports["default"] = Crypto;
module.exports = exports["default"];