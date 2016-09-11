"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var transform = function transform(data) {
  var flatten = function flatten(arr) {
    return [].concat.apply([], arr);
  };

  var letters = flatten(Object.values(data));
  var keys = Object.keys(data);

  return letters.reduce(function (o, v, i) {
    for (var j = 0; j < keys.length; j++) {
      if (data[keys[j]].includes(v)) {
        o[v.toLowerCase()] = Number(keys[j]);
      }
    }
    return o;
  }, {});
};

exports["default"] = transform;
module.exports = exports["default"];