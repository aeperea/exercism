'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (year, month, dayOfWeek, nth) {
  var dates = runMonth(year, month, dayOfWeek);
  switch (nth) {
    case '1st':
      return dates[0];
      break;
    case '2nd':
      return dates[1];
      break;
    case '3rd':
      return dates[2];
      break;
    case '4th':
      return dates[3];
      break;
    case '5th':
      if (typeof dates[4] === 'undefined') {
        throw new Error('MeetupDayException');
      }
      return dates[4];
      break;
    case 'teenth':
      return getTeenth(dates);
      break;
    case 'last':
      return dates[dates.length - 1];
      break;
  }
};

var runMonth = function runMonth(year, month, dayOfWeek) {
  var matchedDays = [];
  for (var day = 1; day <= 31; day++) {
    var date = new Date(year, month, day);
    if (date.getMonth() === month) {
      if (daysNum[date.getDay()] === dayOfWeek) {
        matchedDays.push(date);
      }
    }
  }
  return matchedDays;
};

var getTeenth = function getTeenth(dates) {
  var matchedDate = null;
  dates.forEach(function (d) {
    if (d.getDate() >= 10 && d.getDate() < 20) {
      matchedDate = d;
    }
  });
  if (matchedDate) {
    return matchedDate;
  } else {
    throw new Error('MeetupDayException');
  }
};

var daysNum = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
};
module.exports = exports['default'];