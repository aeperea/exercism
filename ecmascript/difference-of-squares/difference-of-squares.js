export default class Squares {
  constructor(n){
    this.n = n;
    this.arr = [...Array(n+1).keys()].slice(1,n+1);
    this.sumOfSquares = this.arr.reduce((o,v) => o + v*v, 0);
    this.squareOfSums = Math.pow(this.arr.reduce((o,v) => o + v  , 0), 2);
    this.difference   = this.squareOfSums - this.sumOfSquares;
  }
}
