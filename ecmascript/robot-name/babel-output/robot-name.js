'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var nums = '0123456789';
var usedNames = [];

var Robot = (function () {
  function Robot() {
    _classCallCheck(this, Robot);

    this.reset();
  }

  _createClass(Robot, [{
    key: 'genName',
    value: function genName() {
      var rm = function rm(n) {
        return Math.floor(Math.random() * n);
      };
      return '' + letters[rm(26)] + letters[rm(26)] + nums[rm(10)] + nums[rm(10)] + nums[rm(10)];
    }
  }, {
    key: 'reset',
    value: function reset() {
      this._name = this.genUniqueName();
    }
  }, {
    key: 'genUniqueName',
    value: function genUniqueName() {
      var name = this.genName();

      while (usedNames.includes(name)) {
        name = this.genName();
      }

      usedNames.push(name);
      return name;
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
  }]);

  return Robot;
})();

exports['default'] = Robot;
module.exports = exports['default'];