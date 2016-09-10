export default class Words {
  count(phrase){
    // excelent case for the use of REDUCE :)

    let words = phrase.trim()
        .replace(/ +/, " ")
        .replace(/\t|\n/, " ")
        .toLowerCase().split(" ");

    return words.reduce((o,n,i) => {
      (o.hasOwnProperty(n)) ? o[n]++ : o[n] = 1;
      return o;
    }, {});
  }
}
