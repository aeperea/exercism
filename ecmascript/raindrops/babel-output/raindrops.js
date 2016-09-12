"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var maps = { 3: "i", 5: "a", 7: "o" };

var Raindrops = (function () {
  function Raindrops() {
    _classCallCheck(this, Raindrops);
  }

  _createClass(Raindrops, [{
    key: "convert",
    value: function convert(n) {
      var message = [3, 5, 7].map(function (factor) {
        if (n % factor === 0) {
          return "Pl" + maps[factor] + "ng";
        } else {
          return '';
        }
      }).join("");

      return message == '' ? n.toString() : message;
    }
  }]);

  return Raindrops;
})();

exports["default"] = Raindrops;
module.exports = exports["default"];