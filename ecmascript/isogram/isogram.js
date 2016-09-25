export default class Isogram {
  constructor(word) {
    this.word = word;
  }
  isIsogram() {
    let isIt = true;
    let letters = [];
    this.word.toLowerCase().replace(/[- ]/g, '').split('').forEach(l => {
      if (letters.indexOf(l) >= 0) {
        isIt = false;
      }
      letters.push(l);
    });
    return isIt;
  }
}
