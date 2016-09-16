const reDigits = /[-\d]+/g;
const reOperations = /multiplied|divided|plus|minus/g;

const ArgumentError = () => {
  return Error('Bad args');
}

const WordProblem = (question) => {

  const answer = () => {
    let operations = question.match(reOperations);
    if (!operations) {throw new ArgumentError();}
    let digits = question.match(reDigits).map(Number);

    return compute(digits, operations);
  };

  const compute = (digits, operations) => {
    let total = digits[0];

    operations.forEach((operation, i) => {
      switch(operation) {
      case 'plus':
        total += digits[i+1];
        break;
      case 'minus':
        total -= digits[i+1];
        break;
      case 'multiplied':
        total *= digits[i+1];
        break;
      case 'divided':
        total /= digits[i+1];
        break;
      }
    });

    return total;
  }

  return {answer};
}

export default {WordProblem, ArgumentError};
