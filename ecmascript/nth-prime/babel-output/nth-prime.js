'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var isPrime = function isPrime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

var Prime = function Prime() {
  var nth = function nth(n) {
    if (n < 1) {
      throw new Error('Prime is not possible');return;
    }
    var i = 1;
    var nthFound = 2;
    var number = 3;

    while (i !== n) {
      if (isPrime(number)) {
        i++;
        nthFound = number;
      }
      number++;
    }
    return nthFound;
  };

  return { nth: nth };
};

exports['default'] = Prime;
module.exports = exports['default'];