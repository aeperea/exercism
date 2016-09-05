var Words = function() {};

Words.prototype.count = function(sentence) {
  var words = sentence.trim().replace(/ +/, " ").replace(/\t|\n/, " ").toLowerCase().split(" ");
  var counter = {};
  words.forEach(function(word) {
    ((counter.hasOwnProperty(word)) ? counter[word]++ : counter[word] = 1);
  });
  return counter;
};

module.exports = Words;
