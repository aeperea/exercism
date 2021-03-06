"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Binary = (function () {
  function Binary(num) {
    _classCallCheck(this, Binary);

    this.num = String(num);
  }

  _createClass(Binary, [{
    key: "toDecimal",
    value: function toDecimal() {
      if (!this.isBinary(this.num)) {
        return 0;
      }

      var num = [].concat(_toConsumableArray(this.num)).reverse();
      return num.reduce(function (o, v, i) {
        if (v === "1") {
          o += Math.pow(2, i);
        }
        return o;
      }, 0);
    }
  }, {
    key: "isBinary",
    value: function isBinary(n) {
      var re = /^[01]+$/;
      return re.test(n);
    }
  }]);

  return Binary;
})();

exports["default"] = Binary;
module.exports = exports["default"];