'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var mapUnit = { 0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' };
var mapTeen = { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' };
var mapDecs = { 0: '', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety' };
var mapOrd = { 0: '', 1: 'thousand', 2: 'million', 3: 'billion' };

var Say = (function () {
  function Say() {
    _classCallCheck(this, Say);
  }

  _createClass(Say, [{
    key: 'inEnglish',
    value: function inEnglish(num) {
      if (num >= 1e12 || num < 0) {
        throw new Error('Number must be between 0 and 999,999,999,999.');
      }
      num = num.toString();
      if (num === '0') {
        return 'zero';
      }

      var arr = breakBy3(num);
      var englishArr = arr.map(function (triad, order) {
        if (Number(triad) === 0) {
          return '';
        }
        return (analyzeThreeDigit(triad) + ' ' + mapOrd[order]).trim();
      });
      return englishArr.reverse().join(' ').trim().replace("  ", " ");
    }
  }]);

  return Say;
})();

exports['default'] = Say;

var analyzeThreeDigit = function analyzeThreeDigit(n) {
  var size = n.length;
  if (size === 3) {
    var decUnit = getDecs(n[1] + n[2]);
    if (n[0] === '0') {
      return decUnit;
    }
    return mapUnit[n[0]] + ' hundred ' + decUnit;
  } else if (size === 2) {
    var decUnit = getDecs(n[0] + n[1]);
    return decUnit.trim();
  } else {
    return '' + mapUnit[n[0]];
  }
};

var getDecs = function getDecs(n) {
  if (n[0] === '1') {
    return mapTeen[n[0] + n[1]];
  } else {
    if (n[0] === '0') {
      return mapUnit[n[1]];
    }
    if (n[1] === '0') {
      return mapDecs[n[0]];
    }
    return mapDecs[n[0]] + '-' + mapUnit[n[1]];
  }
};

var breakBy3 = function breakBy3(n) {
  return [].concat(_toConsumableArray(n)).reverse().join('').match(/.{1,3}/g).map(function (s) {
    return [].concat(_toConsumableArray(s)).reverse().join('');
  });
};
module.exports = exports['default'];