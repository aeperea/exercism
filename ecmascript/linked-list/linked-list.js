export default class LinkedList {
  constructor(){
    this.nodes = [];
  }
  shift(){
    return this.nodes.shift();
  }
  unshift(n){
    this.nodes.unshift(n);
  }
  pop(){
    return this.nodes.pop();
  }
  push(n){
    this.nodes.push(n);
  }
  delete(n){
    let i = this.nodes.indexOf(n);
    if (i < 0) {return;}
    this.nodes.splice(i, 1);
  }
  count(){
    return this.nodes.length
  }
}
