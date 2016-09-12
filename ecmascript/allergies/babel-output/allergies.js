'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var allergiesList = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];

var Allergies = (function () {
  function Allergies(n) {
    _classCallCheck(this, Allergies);

    this.bin = Number(n).toString(2);
    this.allergies = [];
  }

  _createClass(Allergies, [{
    key: 'list',
    value: function list() {
      if (this.allergies.length > 0 || typeof this.bin === 'undefined') {
        return this.allergies;
      }

      var allergies = [];
      [].concat(_toConsumableArray(this.bin)).reverse().forEach(function (al, i) {
        if (i >= allergiesList.length) {
          return;
        }
        if (al === "1") {
          allergies.push(allergiesList[i]);
        }
      });

      this.allergies = allergies;
      return allergies;
    }
  }, {
    key: 'allergicTo',
    value: function allergicTo(allergy) {
      return this.list().includes(allergy);
    }
  }]);

  return Allergies;
})();

exports['default'] = Allergies;
module.exports = exports['default'];