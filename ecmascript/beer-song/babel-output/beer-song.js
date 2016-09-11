"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  verse: function verse(n) {
    return this.getFirstLine(n) + "\n" + this.getSecondLine(n) + "\n";
  },
  sing: function sing() {
    var from = arguments.length <= 0 || arguments[0] === undefined ? 99 : arguments[0];
    var til = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    var song = "";
    for (var i = from; i >= til; i--) {
      song += this.verse(i);
      if (i !== 0 && i !== til) {
        song += "\n";
      }
    }
    return song;
  },
  getFirstLine: function getFirstLine(n) {
    if (n === 0) {
      return "No more bottles of beer on the wall, no more bottles of beer.";
    } else if (n === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.";
    } else {
      return n + " bottles of beer on the wall, " + n + " bottles of beer.";
    }
  },
  getSecondLine: function getSecondLine(n) {
    if (n === 0) {
      return "Go to the store and buy some more, 99 bottles of beer on the wall.";
    } else if (n - 1 === 0) {
      return "Take it down and pass it around, no more bottles of beer on the wall.";
    } else if (n - 1 === 1) {
      return "Take one down and pass it around, 1 bottle of beer on the wall.";
    } else {
      return "Take one down and pass it around, " + (n - 1) + " bottles of beer on the wall.";
    }
  }
};
module.exports = exports["default"];