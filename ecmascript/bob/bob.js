export default class Bob {
  constructor(){
    this.phrases = {
      yell:      'Whoa, chill out!',
      question:  'Sure.',
      silence:   'Fine. Be that way!',
      whatever:  'Whatever.'
    };
  }

  hey(input){
    if (this.isSilence(input))  {return this.phrases["silence"]; }
    if (this.isYelling(input))  {return this.phrases["yell"]; }
    if (this.isQuestion(input)) {return this.phrases["question"]; }
    return this.phrases["whatever"];
  }
  isQuestion(input){
    let re = /\?$/;
    return re.test(input)
  }
  isYelling(input){
    let re = /[a-zA-Z]/;
    return re.test(input) && input === input.toUpperCase(); 
  }
  isSilence(input){
    let re = /[a-zA-Z0-9]/;
    return !re.test(input)
  }
}
