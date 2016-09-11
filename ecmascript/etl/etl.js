export default (data) => {
  return Object.keys(data).reduce((o,v) => {
    data[v].forEach(letter => {
      o[letter.toLowerCase()] = Number(v);
    });
    return o;
  }, {});
};
