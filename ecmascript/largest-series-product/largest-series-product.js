export default class Series {
  constructor(n){
    this.n = n;
  }
  validate(input, number) {
    if (/[^0-9]/g.test(this.n)) {throw new Error('Invalid input.');}
    if (number < 0) {throw new Error('Invalid input.');}
    if (number > input.length) {throw new Error('Slice size is too big.');}
  }
  largestProduct(n){
    this.validate(this.n, n);

    let max = 0;
    for (let i = 0; i <= this.n.length - n; i++) {
      let maxLoop = 1;
      for (let j = i; j < i + n; j++) {
        maxLoop *= Number(this.n[j]);
      }
      max = Math.max(maxLoop, max);
    }

    return max;
  }
}
