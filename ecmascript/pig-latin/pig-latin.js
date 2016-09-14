export default class PigLatin {

  translate(phrase){
    return phrase.split(" ").map(word => {
      if (/[aeiouy]/.test(word[0])) {
        return word + 'ay';
      }
      return this.separateConsonant(word);
    }).join(" ");
  }

  separateConsonant(word) {
    let newWord    = '';
    let lastLetter = '';

    for (let i = 0 ; i < word.length ; i++) {
      let letter = word[i];
      if (/[^aeiouy]/.test(letter)) {
        newWord += letter;
      } else {
        lastLetter = newWord[newWord.length - 1];
        if (letter === 'u' && lastLetter === 'q') {
          newWord += letter;
        } else {
          break;
        }
      }
    }
    return word.split(newWord)[1] + newWord + 'ay';
  }
}
