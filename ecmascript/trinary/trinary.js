export default class Trinary {
  constructor(n){
    this.n = n;
  }
  isTrinary(n){
    let re = /^[012]+$/;
    return re.test(n);
  }
  toDecimal(){
    if (!this.isTrinary(this.n)) { return 0; }

    return [...this.n].reverse().reduce((o,v,i) => {
      return o + Number(v) * Math.pow(3,i);
    }, 0);
  }
}
