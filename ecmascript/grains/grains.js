import BigInt from './big-integer';

export default class Grains {
  square(n) {
    return String(BigInt(2).pow(n-1));
  }
  total() {
    let total = BigInt(this.square(65)).minus(1);
    return String(total);
  }
}
