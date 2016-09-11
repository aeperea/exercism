'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var earthYears = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

var earthSecs = 31557600;

var twoDigits = function twoDigits(num) {
  return Number(parseFloat(Math.round(Number(num) * 100) / 100).toFixed(2));
};

var SpaceAge = (function () {
  function SpaceAge(seconds) {
    _classCallCheck(this, SpaceAge);

    this._seconds = seconds;
  }

  _createClass(SpaceAge, [{
    key: 'ageOn',
    value: function ageOn(planet) {
      return twoDigits(this._seconds / earthSecs / earthYears[planet]);
    }
  }, {
    key: 'onEarth',
    value: function onEarth() {
      return this.ageOn('earth');
    }
  }, {
    key: 'onMercury',
    value: function onMercury() {
      return this.ageOn('mercury');
    }
  }, {
    key: 'onVenus',
    value: function onVenus() {
      return this.ageOn('venus');
    }
  }, {
    key: 'onMars',
    value: function onMars() {
      return this.ageOn('mars');
    }
  }, {
    key: 'onJupiter',
    value: function onJupiter() {
      return this.ageOn('jupiter');
    }
  }, {
    key: 'onSaturn',
    value: function onSaturn() {
      return this.ageOn('saturn');
    }
  }, {
    key: 'onNeptune',
    value: function onNeptune() {
      return this.ageOn('neptune');
    }
  }, {
    key: 'onUranus',
    value: function onUranus() {
      return this.ageOn('uranus');
    }
  }, {
    key: 'seconds',
    get: function get() {
      return this._seconds;
    }
  }]);

  return SpaceAge;
})();

exports['default'] = SpaceAge;
module.exports = exports['default'];