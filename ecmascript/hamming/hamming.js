export default class Hamming {
  compute(str1, str2){
    if (str1.length !== str2.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    let mismatches = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) { mismatches++; }
    }
    return mismatches;
  }
}
