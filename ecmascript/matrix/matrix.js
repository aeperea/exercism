const Matrix = (str) => {
  const rows    = str.split('\n').map(n => n.split(' ').map(Number))
  const columns = rows[0].map((_, i) => rows.map(n => n[i]))

  return Object.freeze({rows, columns});
}

export default Matrix;
