export default class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }
  matches(wordList) {
    if (typeof wordList !== "object") {wordList = Object.values(arguments);}

    let matches = [];
    wordList.forEach((word) => {
      let smallWord = word.toLowerCase();

      if (smallWord.length !== this.word.length) { return; }
      if (smallWord === this.word) { return; }

      if (this.order(smallWord) === this.order(this.word)) {
        matches.push(word);
      }
    });
    return matches;
  }
  order(string){
    return string.split("").sort((a,b) => a > b).join("");
  }
}
