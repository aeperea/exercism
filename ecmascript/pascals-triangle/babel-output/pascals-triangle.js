"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Triangle = (function () {
  function Triangle(n) {
    _classCallCheck(this, Triangle);

    this.totalRows = n;
    this.computeRows();
  }

  _createClass(Triangle, [{
    key: "computeRows",
    value: function computeRows() {
      this.rows = [[1]];

      for (var row = 1; row < this.totalRows; row++) {
        this.rows[row] = [];
        for (var i = 0; i <= row; i++) {
          if (i - 1 < 0) {
            this.rows[row][i] = this.rows[row - 1][i];
          } else if (i + 1 > row) {
            this.rows[row][i] = this.rows[row - 1][i - 1];
          } else {
            this.rows[row][i] = this.rows[row - 1][i - 1] + this.rows[row - 1][i];
          }
        }
      }

      this.lastRow = this.rows[this.totalRows - 1];
    }
  }]);

  return Triangle;
})();

exports["default"] = Triangle;
module.exports = exports["default"];