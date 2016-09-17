'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var directions = ['east', 'south', 'west', 'north'];
var maps = { R: 'turnRight', L: 'turnLeft', A: 'advance' };

var Robot = (function () {
  function Robot() {
    _classCallCheck(this, Robot);

    this.bearing = 'north';
    this.coordinates = [0, 0];
  }

  _createClass(Robot, [{
    key: 'orient',
    value: function orient(dir) {
      if (directions.indexOf(dir) === -1) {
        return 'Invalid Robot Bearing';
      }
      this.bearing = dir;
    }
  }, {
    key: 'turnRight',
    value: function turnRight() {
      this.bearing = directions.concat(directions)[directions.indexOf(this.bearing) + 1];
    }
  }, {
    key: 'turnLeft',
    value: function turnLeft() {
      directions.reverse();
      this.turnRight();
      directions.reverse();
    }
  }, {
    key: 'advance',
    value: function advance() {
      switch (this.bearing) {
        case 'north':
          this.coordinates[1]++;
          break;
        case 'east':
          this.coordinates[0]++;
          break;
        case 'south':
          this.coordinates[1]--;
          break;
        case 'west':
          this.coordinates[0]--;
          break;
      }
    }
  }, {
    key: 'at',
    value: function at(x, y) {
      this.coordinates = [x, y];
    }
  }, {
    key: 'place',
    value: function place(position) {
      this.coordinates = [position.x, position.y];
      this.bearing = position.direction;
    }
  }, {
    key: 'evaluate',
    value: function evaluate(inst) {
      var _this = this;

      this.instructions(inst).forEach(function (I) {
        switch (I) {
          case 'turnLeft':
            _this.turnLeft();
            break;
          case 'turnRight':
            _this.turnRight();
            break;
          case 'advance':
            _this.advance();
            break;
        }
      });
    }
  }, {
    key: 'instructions',
    value: function instructions(inst) {
      return [].concat(_toConsumableArray(inst)).map(function (n) {
        return maps[n];
      });
    }
  }]);

  return Robot;
})();

exports['default'] = Robot;
;
module.exports = exports['default'];