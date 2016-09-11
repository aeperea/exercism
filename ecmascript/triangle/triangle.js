export default class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.sides = [a,b,c];
  }
  kind() {
    this.checkInequality();
    if (this.sides.filter((side) => side === this.a).length === 3) {return 'equilateral';}
    if (this.sides.filter((side) => side === this.a).length === 2 ||
        this.sides.filter((side) => side === this.b).length === 2) {return 'isosceles';}
    return 'scalene';
  }
  checkInequality(){
    if ((this.a <= 0) || (this.b <= 0) || (this.c <= 0)) {
      throw new Error();
      return;
    }
    if (this.a + this.b < this.c) {throw new Error(); return; }
    if (this.b + this.c < this.a) {throw new Error(); return; }
    if (this.c + this.a < this.b) {throw new Error(); return; }
  }
}
