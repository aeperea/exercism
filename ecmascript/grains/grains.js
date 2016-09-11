import BigInt from './big-integer';

export default class Grains {
  square(n) {
    let base = new BigInt(2);
    return String(base.pow(n-1));
  }
  total() {
    let total = new BigInt(this.square(65));
    total = total.minus(1);
    return String(total);
  }
}


