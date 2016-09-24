'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Ocr = function Ocr() {

  var convert = function convert(input) {
    var lines = input.split('\n');

    if (lines.length > 4) {
      var multiLines = lines.length / 4;
      var newLines = [];
      for (var i = 0; i < multiLines; i++) {
        var section = lines.slice(i * 4, (i + 1) * 4);
        newLines.push(threeRowAnalysis(section));
      }
      return newLines.join(',');
    } else {
      return threeRowAnalysis(lines);
    }
  };

  var threeRowAnalysis = function threeRowAnalysis(lines) {
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
      return matchIndex < 0 ? '?' : matchIndex.toString();
    }).join('');
  };

  return {
    convert: convert
  };
};

exports['default'] = Ocr;

var numsArr = [' _ \n' + '| |\n' + '|_|\n' + '   ', '   \n' + '  |\n' + '  |\n' + '   ', ' _ \n' + ' _|\n' + '|_ \n' + '   ', ' _ \n' + ' _|\n' + ' _|\n' + '   ', '   \n' + '|_|\n' + '  |\n' + '   ', ' _ \n' + '|_ \n' + ' _|\n' + '   ', ' _ \n' + '|_ \n' + '|_|\n' + '   ', ' _ \n' + '  |\n' + '  |\n' + '   ', ' _ \n' + '|_|\n' + '|_|\n' + '   ', ' _ \n' + '|_|\n' + ' _|\n' + '   '];
module.exports = exports['default'];