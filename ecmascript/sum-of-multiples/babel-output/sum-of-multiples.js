"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SumOfMultiples = function SumOfMultiples(list) {
  var to = function to(n) {
    var matches = [];

    list.forEach(function (v) {
      for (var i = v; i < n; i++) {
        if (i % v === 0) {
          var index = matches.indexOf(i);
          if (index < 0) {
            matches.push(i);
          }
        }
      }
    });

    return matches.reduce(function (o, v, i) {
      return o + v;
    }, 0);
  };

  return { to: to };
};

exports["default"] = SumOfMultiples;
module.exports = exports["default"];