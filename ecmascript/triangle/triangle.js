export default class Triangle {
  constructor(a, b, c) {
    this.sides = [a,b,c].sort((a,b) => a > b);
  }
  kind() {
    this.checkInequality();
    let s = this.sides;
    if (s[0] === s[2]) {return 'equilateral';}
    if (s[0] === s[1] || s[1] === s[2]) {return 'isosceles';}
    return 'scalene';
  }
  checkInequality(){
    let s = this.sides;
    if (s[0] + s[1] <= s[2]) {throw new Error(); return;}
  }
}
