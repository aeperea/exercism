export default class Hamming {
  compute(str1, str2){
    if (str1.length !== str2.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    return str1.split("").reduce((o, v, i) => {
      if (str1[i] !== str2[i]) {return o + 1;}
      return o;
    }, 0);
  }
}
