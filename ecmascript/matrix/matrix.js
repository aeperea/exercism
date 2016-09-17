const Matrix = (str) => {
  let matrix = str.split('\n').map(n => n.split(' ').map(Number));

  let transpose = [];
  for (let i = 0; i < matrix[0].length; i++) {
    transpose[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      transpose[i].push(matrix[j][i])
    }
  }

  return {
    rows: matrix,
    columns: transpose
  }
}

export default Matrix;
