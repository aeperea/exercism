const Octal = (n) => {
  const isOctal = n => /^[0-7]+$/.test(n);
  const toDecimal = () => {
    if (!isOctal(n)) { return 0; }
    return [...n].reverse().reduce((o,v,i) => {
      return o + Number(v) * Math.pow(8,i);
    }, 0);
  }
  return {toDecimal}
}

export default Octal;
