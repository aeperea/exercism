export default class PrimeFactors {
  for(n){
    let primes = [];
    let factor = 2;

    while (factor <= n) {
      if (n % factor === 0) {
        primes.push(factor);
        n = n / factor;
      } else {
        factor++;
      }
    }
    return primes;
  }
}
