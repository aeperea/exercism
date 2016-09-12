'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.bufferFullException = bufferFullException;
exports.bufferEmptyException = bufferEmptyException;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CircularBuffer = (function () {
  function CircularBuffer(size) {
    _classCallCheck(this, CircularBuffer);

    this.size = size;
    this.clear();
  }

  _createClass(CircularBuffer, [{
    key: 'read',
    value: function read() {
      var value = this.buffer[this.indexRead];
      if (typeof value === 'undefined') {
        throw bufferEmptyException();
      }

      delete this.buffer[this.indexRead];
      this.indexRead = this.incrementIndex(this.indexRead);
      this.fills--;
      return value;
    }
  }, {
    key: 'write',
    value: function write(n) {
      if (n === null || typeof n === 'undefined') {
        return;
      }
      if (this.fills === this.size) {
        throw bufferFullException();
      }

      this.fills++;
      this.buffer[this.indexWrite] = n;
      this.indexWrite = this.incrementIndex(this.indexWrite);
    }
  }, {
    key: 'forceWrite',
    value: function forceWrite(n) {
      if (this.fills !== this.size) {
        return this.write(n);
      }

      this.buffer[this.indexWrite] = n;
      this.indexWrite = this.incrementIndex(this.indexWrite);
      this.indexRead = this.incrementIndex(this.indexRead);
    }
  }, {
    key: 'incrementIndex',
    value: function incrementIndex(index) {
      return (index + 1) % this.size;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.buffer = [];
      this.indexWrite = 0;
      this.indexRead = 0;
      this.fills = 0;
    }
  }]);

  return CircularBuffer;
})();

function bufferFullException() {
  return 'Buffer is Full';
}

function bufferEmptyException() {
  return 'Buffer is Empty';
}

exports['default'] = function (n) {
  return new CircularBuffer(n);
};