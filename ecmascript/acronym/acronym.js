export default class Acrynoms {
  static upcaseInside(w) {
    let matches = w.match(/[A-Z]/g);
    if (matches && matches.length > 1) {
      return {ok: true, matches: matches.join("")};
    }
    return {ok: false, matches: null};
  }
  static parse(str) {
    let separatedWords = str.replace(/[,-:]/, " ").split(/\W+/);
    return separatedWords.map(word => {
      if (word.toUpperCase() === word) {return word[0].toUpperCase();}
      let {ok, matches} = this.upcaseInside(word);
      if (ok) { return matches; }
      return word[0].toUpperCase();
    }).join("");
  }
}
