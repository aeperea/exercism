const SumOfMultiples = list => {
  const to = n => {
    let matches = [];

    list.forEach(v => {
      for (let i = v; i < n; i++) {
        if (i % v === 0) {
          let index = matches.indexOf(i);
          if (index < 0) {matches.push(i);}
        }
      }
    });

    return matches.reduce((o,v,i) => {
      return o + v;
    }, 0);
  };

  return {to};
}

export default SumOfMultiples;
