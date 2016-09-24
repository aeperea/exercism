'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Ocr = function Ocr() {

  var convert = function convert(input) {
    var lines = input.split('\n');
    var transcription = [];

    lines.forEach(function (line, lineIndex) {
      line.match(/.{1,3}/g).forEach(function (v, i) {
        if (typeof transcription[i] === 'undefined') {
          transcription[i] = '';
        }
        transcription[i] += v;
        if (lineIndex !== 3) {
          transcription[i] += '\n';
        }
      });
    });

    return transcription.map(function (num) {
      var matchIndex = numsArr.indexOf(num);
      if (matchIndex < 0) {
        return '?';
      }
      return String(matchIndex);
    }).join('');
  };

  return {
    convert: convert
  };
};

exports['default'] = Ocr;

var numsArr = [' _ \n' + '| |\n' + '|_|\n' + '   ', '   \n' + '  |\n' + '  |\n' + '   ', ' _ \n' + ' _|\n' + '|_ \n' + '   ', ' _ \n' + ' _|\n' + ' _|\n' + '   ', '   \n' + '|_|\n' + '  |\n' + '   ', ' _ \n' + '|_ \n' + ' _|\n' + '   ', ' _ \n' + '|_ \n' + '|_|\n' + '   ', ' _ \n' + '  |\n' + '  |\n' + '   ', ' _ \n' + '|_|\n' + '|_|\n' + '   ', ' _ \n' + '|_|\n' + ' _|\n' + '   '];
module.exports = exports['default'];