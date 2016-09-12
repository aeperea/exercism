export default class PrimeFactors {
  for(n){
    let primes = [];
    for(let i = 2; i <= n; i++) {
      while(n % i === 0) {
        primes.push(i);
        n /= i;
      }
    }
    return primes;
  }
}
