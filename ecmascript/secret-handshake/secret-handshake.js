const maps = ['wink', 'double blink', 'close your eyes', 'jump', 'reverse'];

export default class SecretHandshake {
  constructor(hex){
    if (this.check(hex)) { return; }
    this.hex = hex;
  }
  check(hex){
    if (typeof hex !== 'number') {
      throw new Error('Handshake must be a number');
    }
    return false;
  }
  commands() {
    let bin = parseInt(this.hex, 16).toString(2);
    let willReverse = false;
    let sequence = [];

    [...bin].reverse().map((b, i) => {
      if (b === '1') {
        if (i < 4) {
          sequence.push(maps[i]);
        } else {
          willReverse = true;
        }
      }
    });
    if (willReverse) { return sequence.reverse(); }
    return sequence;
  }
}
