'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var alph = 'abcdefghijklmnopqrstuvwxyz';
var ciph = 'zyxwvutsrqponmlkjihgfedcba';

exports['default'] = {
  encode: function encode(str) {
    str = str.toLowerCase().replace(/[^0-9a-z]/g, '').replace(/(.{5})/g, '$1 ');
    return [].concat(_toConsumableArray(str)).map(function (l) {
      if (/[0-9 ]/.test(l)) {
        return l;
      };
      return ciph[alph.indexOf(l)];
    }).join("").trim();
  }
};
module.exports = exports['default'];