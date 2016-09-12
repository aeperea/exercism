export default class Binary {
  constructor(num){
    this.num = String(num);
  }
  toDecimal(){
    if (!this.isBinary(this.num)) {return 0;}

    let num = [...this.num].reverse();
    return num.reduce((o,v,i) => {
      if (v === "1") {o += Math.pow(2, i);}
      return o;
    }, 0);
  }
  isBinary(n){
    let re = /^[01]+$/;
    return re.test(n);
  }
}
