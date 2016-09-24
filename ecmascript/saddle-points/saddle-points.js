const Matrix = str => {

  let rows    = str.split('\n').map(n => n.split(' ').map(Number));
  let columns = rows[0].map((_, i) => rows.map(n => n[i]));

  let saddlePoints = rows.reduce((o,row,i) => {
    const max = Math.max(...row);
    row.forEach((el,j) => {
      if (el !== max) return;
      if (Math.min(...columns[j]) === el) o.push([i,j]);
    });
    return o;
  }, []);

  return {
    rows,
    columns,
    saddlePoints
  }
}

export default Matrix;
