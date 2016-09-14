export default class PigLatin {
  translate(phrase) {
    return phrase.replace(/\w+/g,
      word => word.replace(
          /((?:qu|[^aeiou])*)(.*)/, '$2$1ay'));
  }
}
