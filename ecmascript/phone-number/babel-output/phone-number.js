"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PhoneNumber = (function () {
  function PhoneNumber(num) {
    _classCallCheck(this, PhoneNumber);

    num = String(num);
    this.phoneNumber = this.parseNumber(num);
  }

  _createClass(PhoneNumber, [{
    key: "toString",
    value: function toString() {
      return "(" + this.areaCode() + ") " + this.phoneNumber.substr(3, 3) + "-" + this.phoneNumber.substr(6, 4);
    }
  }, {
    key: "number",
    value: function number() {
      return this.phoneNumber;
    }
  }, {
    key: "areaCode",
    value: function areaCode() {
      return this.phoneNumber.substr(0, 3);
    }
  }, {
    key: "parseNumber",
    value: function parseNumber(num) {
      var badNum = "0000000000";
      var phoneNum = num.replace(/[\(\) -\.]/g, '');
      var size = phoneNum.length;

      if (!this.hasOnlyNumbers(phoneNum)) {
        return badNum;
      }
      if (size === 11 && phoneNum[0] === "1") {
        return phoneNum.substr(1, 10);
      }
      if (size === 10) {
        return phoneNum;
      }
      return badNum;
    }
  }, {
    key: "hasOnlyNumbers",
    value: function hasOnlyNumbers(num) {
      var re = /^[0-9]+$/;
      return re.test(num);
    }
  }]);

  return PhoneNumber;
})();

exports["default"] = PhoneNumber;
module.exports = exports["default"];