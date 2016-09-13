export default class Transcriptor {
  constructor(){
    this.dnaMapping = {'C':'G', 'G':'C', 'A':'U', 'T':'A'};
  }
  toRna(str){
    return str.split("").map((nucl) => {
      return this.dnaMapping[nucl];
    }).join("")
  }
}

