'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Song = (function () {
  function Song() {
    _classCallCheck(this, Song);

    this.lines = {
      1: 'I know an old lady who swallowed a fly.',
      2: 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.',
      3: 'I know an old lady who swallowed a bird.\nHow absurd to swallow a bird!',
      4: 'I know an old lady who swallowed a cat.\nImagine that, to swallow a cat!',
      5: 'I know an old lady who swallowed a dog.\nWhat a hog, to swallow a dog!',
      6: 'I know an old lady who swallowed a goat.\nJust opened her throat and swallowed a goat!',
      7: 'I know an old lady who swallowed a cow.\nI don\'t know how she swallowed a cow!',
      8: 'I know an old lady who swallowed a horse.\nShe\'s dead, of course!',
      last: 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.'
    };
    this.reasons = {
      2: 'She swallowed the spider to catch the fly.',
      3: 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.',
      4: 'She swallowed the cat to catch the bird.',
      5: 'She swallowed the dog to catch the cat.',
      6: 'She swallowed the goat to catch the dog.',
      7: 'She swallowed the cow to catch the goat.'
    };
  }

  _createClass(Song, [{
    key: 'verse',
    value: function verse(num) {
      if (num === 8) {
        return this.lines[8] + '\n';
      }

      var fullPhrase = '' + this.lines[num];
      var explaination = [];
      for (var i = num; i > 1; i--) {
        explaination.push(this.reasons[i]);
      }
      if (num === 1) {
        return fullPhrase + '\n' + this.lines['last'] + '\n';
      }
      return fullPhrase + '\n' + explaination.join("\n") + '\n' + this.lines['last'] + '\n';
    }
  }, {
    key: 'verses',
    value: function verses(first, last) {
      var verses = "";
      for (var i = first; i <= last; i++) {
        verses += this.verse(i) + '\n';
      }
      return verses;
    }
  }]);

  return Song;
})();

exports['default'] = Song;
module.exports = exports['default'];