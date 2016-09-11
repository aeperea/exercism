"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (data) {
  return Object.keys(data).reduce(function (o, v) {
    data[v].forEach(function (letter) {
      o[letter.toLowerCase()] = Number(v);
    });
    return o;
  }, {});
};

module.exports = exports["default"];