const alph = 'abcdefghijklmnopqrstuvwxyz';
const rm = n => Math.floor(Math.random() * n);

export default class Cipher {
  constructor(key){
    if (typeof key === 'undefined') {
      this.key = this.generateKey();
    } else {
      this.key = key;
    }
  }
  generateKey(){


  }
}
