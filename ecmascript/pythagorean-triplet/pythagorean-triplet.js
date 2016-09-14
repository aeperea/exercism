export default class Triplet {
  constructor(a,b,c) {
    this.sides = [a,b,c];
  }
  sum(list = this.sides){
    return list.reduce((o,v) => o + v, 0);
  }
  product(list = this.sides){
    return list.reduce((o,v) => o * v, 1);
  }
  sumOfSquares(list = this.sides){
    return list.reduce((o,v) => o + v*v, 0);
  }
  isPythagorean(){
    let c = Math.max.apply(Math, this.sides);
    return this.sumOfSquares() - 2 * c*c === 0;
  }
  static where(opts = {sum: false, minFactor: 1, maxFactor: false}) {
    if (!opts.maxFactor) { throw new Error('Need max factor!'); return;}
    let maxFactor = opts.maxFactor;
    let minFactor = opts.minFactor || 1;
    let sum       = opts.sum || false;
    let triplets  = [];

    for (let a = minFactor; a < maxFactor ; a++) {
      for (let b = a; b < maxFactor ; b++) {
        let c = Math.sqrt(a*a + b*b);
        if (c >= minFactor && c <= maxFactor) {
          if (sum === false && c % 1 === 0)  {
            triplets.push(new Triplet(a,b,c));
          } else if (this.prototype.sum([a,b,c]) === sum) {
            triplets.push(new Triplet(a,b,c));
          }
        }
      }
    }

    return triplets;
  }


}
