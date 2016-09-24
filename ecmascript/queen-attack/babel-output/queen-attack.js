'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Queens = function Queens() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$white = _ref.white;
  var white = _ref$white === undefined ? [0, 3] : _ref$white;
  var _ref$black = _ref.black;
  var black = _ref$black === undefined ? [7, 3] : _ref$black;

  if (white[0] === black[0] && white[1] === black[1]) {
    return 'Queens cannot share the same space.';
  }

  var canAttack = function canAttack() {
    if (white[0] === black[0]) {
      return true;
    }
    if (white[1] === black[1]) {
      return true;
    }
    if (delta() === 1) {
      return true;
    }

    return false;
  };

  var delta = function delta() {
    return Math.abs((white[0] - black[0]) / (white[1] - black[1]));
  };

  var toString = function toString() {
    var board = '';

    for (var r = 0; r < 8; r++) {
      for (var c = 0; c < 8; c++) {
        if (white[0] === r && white[1] === c) {
          board += 'W';
        } else if (black[0] === r && black[1] === c) {
          board += 'B';
        } else {
          board += '_';
        }

        if (c === 7) {
          board += '\n';
        } else {
          board += ' ';
        }
      }
    }

    return board;
  };

  return { white: white, black: black, canAttack: canAttack, toString: toString };
};

exports['default'] = Queens;
module.exports = exports['default'];