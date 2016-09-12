'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (n) {
  var romanNum = [];
  numerals.forEach(function (num) {
    while (n >= num.value) {
      romanNum.push(num.numeral);
      n -= num.value;
    }
  });
  return romanNum.join("");
};

var numerals = [{ value: 1000, numeral: 'M' }, { value: 900, numeral: 'CM' }, { value: 500, numeral: 'D' }, { value: 400, numeral: 'CD' }, { value: 100, numeral: 'C' }, { value: 90, numeral: 'XC' }, { value: 50, numeral: 'L' }, { value: 40, numeral: 'XL' }, { value: 10, numeral: 'X' }, { value: 9, numeral: 'IX' }, { value: 5, numeral: 'V' }, { value: 4, numeral: 'IV' }, { value: 1, numeral: 'I' }];
module.exports = exports['default'];