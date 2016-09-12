const allergiesList = ['eggs', 'peanuts',
                      'shellfish', 'strawberries',
                      'tomatoes', 'chocolate',
                      'pollen', 'cats'];

export default class Allergies {
  constructor(n) {
    this.bin       = Number(n).toString(2);
    this.allergies = [];
  }

  list(){
    if (this.allergies.length > 0 || typeof this.bin === 'undefined') {
      return this.allergies;
    }

    let allergies = [];
    [...this.bin].reverse().forEach((al,i) => {
      if (i >= allergiesList.length) {return;}
      if (al === "1") {allergies.push(allergiesList[i])}
    });

    this.allergies = allergies;
    return allergies;
  }

  allergicTo(allergy){
    return this.list().includes(allergy);
  }
}
