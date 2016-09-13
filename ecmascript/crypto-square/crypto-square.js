export default class Crypto {
  constructor(str){
    this.str = str.toLowerCase()
      .replace(/[^0-9a-z]/g,'');
    this.calculateSize();
  }
  normalizePlaintext(){
    return this.str;
  }
  size(){
    if (!this.cols) {this.calculateSize();}
    return this.cols;
  }
  calculateSize(){
    let rows, cols;
    rows = Math.sqrt(this.str.length);
    if (rows === Math.floor(rows)) { 
      cols = rows;
    } else {
      rows = Math.floor(rows);
      cols = rows + 1;
    }
    this.cols = cols;
    this.rows = rows;
  }
  plaintextSegments(){
    let cols = this.cols;
    let re   = new RegExp(`(.{${cols}})`,"g");
    return this.str.replace(re, "$1 ").trim().split(" ");
  }
  ciphertext(){
    let cipher   = [];
    let segments = this.plaintextSegments();
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.cols; j++) {
        cipher.push(segments[j][i]);
      }
    }
    return cipher.join("");
  }
}
