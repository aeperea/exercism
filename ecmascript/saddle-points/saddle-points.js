const max = arr => Math.max.apply(Math, arr)
const min = arr => Math.min.apply(Math, arr)

const Matrix = str => {

  let rows    = str.split('\n').map(n => n.split(' ').map(Number));
  let columns = rows[0].map((_, i) => rows.map(n => n[i]));
  let saddlePoints = [];

  const getSaddlePoints = () => {
    rows.forEach((row, i) => {
      let largest = max(row);
      row.forEach((el, j) => {
        if (el === largest) {
          let smallest = min(columns[j]);
          if (smallest === el) {
            saddlePoints.push([i,j]);
          }
        }
      });
    });
  }();

  return {
    rows,
    columns,
    saddlePoints
  }
}

export default Matrix;
