export default class Pangram {
  constructor(phrase = ''){
    this.alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    this.phrase   = [...phrase.toLowerCase()];
  }
  isPangram(){
    if (this.phrase.length === 0) {return false;}

    let noZero = true;
    this.alphabet.forEach(letter => {
      if(!this.phrase.includes(letter)) {
        noZero = false;
        return noZero;
      }
    });

    return noZero;
  }
}
