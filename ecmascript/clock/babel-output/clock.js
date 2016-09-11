"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var calculateMinutes = function calculateMinutes(m) {
  var hours = Math.floor(m / 60);
  var minutes = m % 60;
  if (minutes < 0) {
    minutes = 60 + minutes;
  }

  return { minutes: minutes, hours: hours };
};

var calculateHours = function calculateHours(h) {
  var hours = h % 24;
  if (hours < 0) {
    hours = 24 + hours;
  }

  return { hours: hours };
};

var printTime = function printTime(h, m) {
  if (h < 10) {
    h = "0" + String(h);
  }
  if (m < 10) {
    m = "0" + String(m);
  }
  return h + ":" + m;
};

var computeTime = function computeTime(h, m) {
  var minuteAnalysis = calculateMinutes(m);
  var hoursAnalysis = calculateHours(h + minuteAnalysis.hours);

  return {
    hours: hoursAnalysis.hours,
    minutes: minuteAnalysis.minutes
  };
};

var at = function at(hour) {
  var min = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  var _computeTime = computeTime(hour, min);

  var hours = _computeTime.hours;
  var minutes = _computeTime.minutes;

  return {
    toString: function toString() {
      return printTime(hours, minutes);
    },
    plus: function plus(mins) {
      return at(hour, minutes + mins);
    },
    minus: function minus(mins) {
      return at(hour, minutes - mins);
    },
    equals: function equals(clock) {
      return printTime(hours, minutes) === clock.toString();
    }
  };
};

exports["default"] = at;
module.exports = exports["default"];