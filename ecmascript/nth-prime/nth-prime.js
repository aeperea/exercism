const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) { return false; }
  }
  return true;
}

const Prime = () => {
  const nth = n => {
    if (n < 1) {throw new Error('Prime is not possible'); return;}
    let i = 1;
    let j = 0;

    while (true) {
      i++;
      if (isPrime(i)) {
        j++;
        if (j === n) { return i; }
      }
    }
  }

  return {nth}
}

export default Prime;
