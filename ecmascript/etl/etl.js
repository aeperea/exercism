const transform = (data) => {
  const flatten = (arr) => {
    return [].concat.apply([], arr);
  }

  let letters  = flatten(Object.values(data));
  let keys     = Object.keys(data);

  return letters.reduce((o,v,i) => {
    for (let j = 0; j < keys.length; j++) {
      if (data[keys[j]].includes(v)) {
        o[v.toLowerCase()] = Number(keys[j]);
      }
    }
    return o;
  }, {});
};

export default transform;
