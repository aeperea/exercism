export default class Pangram {
  constructor(phrase){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    this.phrase = phrase.toLowerCase();
    this.letterCounter = [...alphabet].reduce((o,v) => {o[v] = 0; return o;}, {})
  }
  updateLetterCounts() {
    [...this.phrase].forEach(letter => {
      if (typeof this.letterCounter[letter] !== "undefined") {
        this.letterCounter[letter]++;
      }
    });
  }
  isPangram(){
    if (this.phrase.length === 0) {return false;}
    this.updateLetterCounts();

    let noZero = true;
    Object.values(this.letterCounter).forEach(counts => {
      if (counts === 0) { noZero = false; }
    })
    return noZero;
  }
}
