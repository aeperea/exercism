function Bob() {
  this.phrases = {
    yell:      'Whoa, chill out!',
    question:  'Sure.',
    silence:   'Fine. Be that way!',
    whatever:  'Whatever.'
  };

  this.isQuestion = function(input) {
    var re = /\?$/;
    return re.test(input)
  };
  this.isYelling = function(input) {
    var re = /[a-zA-Z]/;
    return re.test(input) && input === input.toUpperCase(); 
  };
  this.isSilence = function(input) {
    var re = /[a-zA-Z0-9]/;
    return !re.test(input)
  }
};

Bob.prototype.hey = function(input) {
  if (this.isSilence(input))  {return this.phrases["silence"]; }
  if (this.isYelling(input))  {return this.phrases["yell"]; }
  if (this.isQuestion(input)) {return this.phrases["question"]; }
  return this.phrases["whatever"];
}

module.exports = Bob;
