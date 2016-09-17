'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var PLANTS = { G: 'grass', C: 'clover', R: 'radishes', V: 'violets' };
var DEFAULT_STUDENTS = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];

var Garden = function Garden(diag) {
  var students = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_STUDENTS : arguments[1];

  var diagramArr = diag.split('\n');
  var step = 2;
  var studentTable = {};

  students.sort();

  diagramArr.forEach(function (line) {
    [].concat(_toConsumableArray(line)).forEach(function (plant, i) {
      var studentIndex = Math.floor(i / step);
      if (typeof studentTable[students[studentIndex].toLowerCase()] === 'undefined') {
        studentTable[students[studentIndex].toLowerCase()] = [];
      }
      studentTable[students[studentIndex].toLowerCase()].push(PLANTS[plant]);
    });
  });

  return studentTable;
};

exports['default'] = Garden;
module.exports = exports['default'];