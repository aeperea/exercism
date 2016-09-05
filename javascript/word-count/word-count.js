var Words = function() {};

Words.prototype.count = function(sentence) {
  var words = sentence.trim().replace(/ +/, " ").replace(/\t|\n/, " ").toLowerCase().split(" ");
  var counter = {};
  words.forEach(function(word) {
    if ((!counter[word]) || (word == 'constructor')) {
      counter[word] = 1;
    } else {
      counter[word]++;
    }
  });
  return counter;
};

module.exports = Words;
