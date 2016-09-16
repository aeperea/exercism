const Hexadecimal = (n) => {

  const toDecimal = () => {
    if (!isHex(n)) { return 0;}
    return [...n].reverse().reduce((o,v,i) => {
      let coef = 0;
      if (/^[0-9]+$/.test(v)) {
        coef = Number(v);
      } else {
        coef = v.charCodeAt(0) - 87;
      }
      return o + coef * Math.pow(16, i);
    }, 0);
  }

  const isHex = (n) => {
    return /^([0-9]|[a-f])+$/.test(n);
  }

  return {
    toDecimal
  };
}

export default Hexadecimal;
