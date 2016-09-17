const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) { return false; }
  }
  return true;
}

const Prime = () => {
  const nth = n => {
    if (n < 1) {throw new Error('Prime is not possible'); return;}
    let i        = 1;
    let nthFound = 2;
    let number   = 3;

    while (i !== n) {
      if (isPrime(number)) {
        i++;
        nthFound = number;
      }
      number++;
    }
    return nthFound;
  }

  return {nth}
}

export default Prime;
