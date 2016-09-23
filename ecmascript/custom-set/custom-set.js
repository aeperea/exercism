export default class CustomSet {
  constructor(values = []) {
    this.values = this.checkDuplicates(values);
  }

  checkDuplicates(values){
    let results = [];
    values.forEach(v => {
      if (results.indexOf(v) < 0) {
        results.push(v);
      }
    });
    results.sort();

    return results;
  }

  eql(set) {
    let areEqual = true;
    set.values.forEach((val, i) => {
      if (this.values[i] !== val) {
        areEqual = false;
      }
    });

    return areEqual;
  }

  difference(set) {
    let noMatch = []
    this.values.forEach(val => {
      let matchIndex = set.values.indexOf(val);
      if (matchIndex < 0) {
        noMatch.push(val);
      }
    });
    return new CustomSet(noMatch);
  }

  disjoint(set) {
    let isDisjoint = true;
    set.values.forEach(val => {
      let index = this.values.indexOf(val);
      if (index >= 0) {
        isDisjoint = false;
      }
    });

    return isDisjoint;
  }

  delete(n){
    let index = this.values.indexOf(n);
    if (index >= 0) {this.values.splice(index, 1);}
    return this;
  }

  empty(){
    this.values = [];
    return this;
  }
  
  intersection(set){
    let matches = []
    this.values.forEach(val => {
      let index = set.values.indexOf(val);
      if (index >= 0) {
        matches.push(val);
      }
    });

    return new CustomSet(matches);
  }

  member(n){
    let index = this.values.indexOf(n);
    if (index >= 0) {
      return true;
    }
    return false;
  }

  put(n){
    this.values.push(n);
    this.values.sort();
    return this;
  }

  size(){
    return this.values.length;
  }

  toList(){
    return this.values;
  }

  subset(set) {
    let isSubset = true;
    set.values.forEach(v => {
      if (this.values.indexOf(v) < 0) {
        isSubset = false;
      }
    });

    return isSubset;
  }

  union(set) {
    return new CustomSet(set.values.concat(this.values))
  }

}
