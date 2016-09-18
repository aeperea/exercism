"use strict";

// const binomial = (n, k) => {
//   let tot = 1;
//   for (let i = 1; i <= k ; i++ ){
//     tot *= (n + 1 - i)/i
//   }
//   return parseInt(tot);
// }

// const Triangle = n => {
//   let totalRows = n;
//   let rows = [];

//   for (let row = 0; row < totalRows; row++){
//     rows[row] = [];
//     for (let i = 0; i <= row; i++) {
//       rows[row][i] = binomial(row, i)
//     }
//   }
//   let lastRow = rows[totalRows - 1]

//   return {
//     rows,
//     lastRow
//   }
// }

// export default Triangle;