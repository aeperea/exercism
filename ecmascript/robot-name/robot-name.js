const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums    = '0123456789';
let usedNames = []

export default class Robot {
  constructor(){
    this.reset();
  }
  get name() {
    return this._name;
  }
  genName(){
    const rm = n => Math.floor(Math.random() * n);
    return `${letters[rm(26)]}${letters[rm(26)]}${nums[rm(10)]}${nums[rm(10)]}${nums[rm(10)]}`
  }
  reset() {
    this._name = this.genUniqueName();
  }
  genUniqueName() {
    let name = this.genName();

    while (usedNames.includes(name)) {
      name = this.genName();
    }

    usedNames.push(name);
    return name;
  }
}

