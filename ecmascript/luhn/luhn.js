const isEven = n => n % 2 === 0;
const isOdd  = n => !isEven(n);

export default class Luhn {
  constructor(n){
    this.n = n.toString();
  }

  get checkDigit(){
    let size = this.n.length;
    return Number(this.n[size - 1]);
  }

  get addends(){
    return this.computeDigits(this.n, isOdd);
  }

  get checksum(){
    let digitString = this.computeDigits(this.n, isOdd).join("");
    return this.sumDigits(Number(digitString));
  }

  get valid(){
    return this.checksum % 10 === 0
  }

  static create(n){
    let digitString = this.prototype.computeDigits(n, isEven).join("");
    let checkSum    = this.prototype.sumDigits(Number(digitString));

    let mod10 = checkSum % 10
    if (mod10 === 0) {
      return Number(n.toString() + mod10);
    } else {
      return Number(n.toString() + (10 - mod10));
    }
  }

  computeDigits(n, func){
    return [...n.toString()].reverse().map((digit, i) => {
      if (func(i)) {
        return this.sumDigits(2*Number(digit));
      }
      return Number(digit);
    }).reverse();
  }

  sumDigits(n){
    if (n < 10) {return n};
    return [...n.toString()].reduce((o,v) => {
      return o + Number(v)
    },0)
  }
}
