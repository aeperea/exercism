export default class Triangle {
  constructor(n) {
    this.totalRows = n;
    this.computeRows();
  }
  computeRows(){
    this.rows = [[1]];

    for (let row = 1; row < this.totalRows; row++){
      this.rows[row] = [];
      for (let i = 0; i <= row; i++){
        if (i - 1 < 0) {
          this.rows[row][i] = this.rows[row - 1][i]
        } else if (i + 1 > row) {
          this.rows[row][i] = this.rows[row - 1][i - 1]
        } else {
          this.rows[row][i] = this.rows[row - 1][i - 1] + this.rows[row - 1][i]
        }
      }
    }
    
    this.lastRow = this.rows[this.totalRows - 1];
  }
}
