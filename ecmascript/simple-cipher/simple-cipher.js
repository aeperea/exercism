const alph = 'abcdefghijklmnopqrstuvwxyz';
const rndm = n => Math.floor(Math.random() * n);
const mod  = (x, y) => ((x % y) + y) % y;

const offset = (i, key) => alph.indexOf(key[i]);
const shift  = (c, n) => alph[mod(alph.indexOf(c) + n, alph.length)];

export default class Cipher {
  constructor(key = this.generateKey()){
    if (this.checkGoodKey(key)) {
      this.key = key;
    } else {
      throw new Error('Bad key');
    }
  }
  generateKey(){
    let key = [];
    let keySize = 100;
    for (let i = 0 ; i < keySize ; i++) {
      key.push(alph[rndm(26)]);
    }
    return key.join('');
  }
  checkGoodKey(key){
    return /[a-z]+/.test(key);
  }
  encode(message){
    return [...message]
      .map((c, i) => shift(c, offset(i, this.key)))
      .join('');
  }
  decode(message){
    return [...message]
      .map((c, i) => shift(c, -offset(i, this.key)))
      .join('');
  }
}
