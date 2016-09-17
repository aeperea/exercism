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
    var j = 0;

    while (true) {
      i++;
      if (isPrime(i)) {
        j++;
        if (j === n) {
          return i;
        }
      }
    }
  };

  return { nth: nth };
};

exports['default'] = Prime;
module.exports = exports['default'];