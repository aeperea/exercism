const Factor = (value, factors) => {
  return {
    value,
    factors
  }
}

const generate = ({ minFactor = 1, maxFactor = Number.MAX_VALUE }) => {

  let min      = Number.MAX_VALUE;
  let max      = 0;
  let largest  = null;
  let smallest = null;

  // sigh... O(n^2)
  for (let i = minFactor; i <= maxFactor; i++) {
    for (let j = minFactor; j <= maxFactor; j++) {
      let n = i*j;
      if (isPal(n)) {
        if (n < min) {
          min = n;
          smallest = new Factor(n, [i,j]);
        }
        if (n > max) {
          max = n
          largest = new Factor(n, [i,j]);
        }
      }
    }
  }

  return {
    largest,
    smallest
  }
}

const isPal = n => {
  n = n.toString();
  return n === [...n].reverse().join('');
}

export default generate;
