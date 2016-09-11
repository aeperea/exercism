export default class Anagram {
  constructor(word) {
    this.word = word;
  }
  matches(...args) {
    let wordList = (args[0].constructor === Array) ? args[0] : args;
    return wordList.filter((word) => {
      return (this.word.toLowerCase() !== word.toLowerCase()) &&
             (this.word.length === word.length) &&
             (this.sort(this.word) === this.sort(word));
    });
  }
  sort(string){
    return string.toLowerCase().split("").sort().join("");
  }
}
