export default class Sieve {
  constructor(n) {
    this.n = n;
  }

  get primes() {
    let list = [...Array(this.n + 1).keys()].slice(2);
    return this.calculateSieve(2, list);
  }

  calculateSieve(i, list){
    if (this.n < 2)   return [];
    if (i === this.n) return list;

    let newList = [];
    list.forEach(n => {
      (((n === i) || (n % i)) == 0) ? null : newList.push(n)
    });
    return this.calculateSieve(i+1, newList);
  }
}
