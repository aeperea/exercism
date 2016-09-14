export default class Series {
  constructor(n){
    this.n = n;
    this.digits = [...n].map(Number);
  }
  slices(n){
    if (n > this.n.length) {throw new Error('Slice size is too big.'); return;}
    let morceux = [];
    for (let i = 0 ; i <= this.n.length - n; i++) {
      morceux.push([...this.n.slice(i,i+n)].map(Number));
    }
    return morceux;
  }
}
