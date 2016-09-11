'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  parse: function parse(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').split(/[\s\-]/).map(function (w) {
      return w.substr(0, 1).toUpperCase();
    }).join('');
  }
};
module.exports = exports['default'];