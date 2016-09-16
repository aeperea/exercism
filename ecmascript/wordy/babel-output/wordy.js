'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var reDigits = /[-\d]+/g;
var reOperations = /multiplied|divided|plus|minus/g;

var ArgumentError = function ArgumentError() {
  return Error('Bad args');
};

var WordProblem = function WordProblem(question) {

  var answer = function answer() {
    var operations = question.match(reOperations);
    if (!operations) {
      throw new ArgumentError();
    }
    var digits = question.match(reDigits).map(Number);

    return compute(digits, operations);
  };

  var compute = function compute(digits, operations) {
    var total = digits[0];

    operations.forEach(function (operation, i) {
      switch (operation) {
        case 'plus':
          total += digits[i + 1];
          break;
        case 'minus':
          total -= digits[i + 1];
          break;
        case 'multiplied':
          total *= digits[i + 1];
          break;
        case 'divided':
          total /= digits[i + 1];
          break;
      }
    });

    return total;
  };

  return { answer: answer };
};

exports['default'] = { WordProblem: WordProblem, ArgumentError: ArgumentError };
module.exports = exports['default'];