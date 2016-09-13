const alph = 'abcdefghijklmnopqrstuvwxyz';
const ciph = 'zyxwvutsrqponmlkjihgfedcba';

export default {
  encode(str){
    str = str.toLowerCase()
      .replace(/[^0-9a-z]/g,'')          // removes special chars
      .replace(/(.{5})/g, '$1 ');        // adds whitespace every 5 chars
    return [...str].map((l) => {
      if (/[0-9 ]/.test(l)) {return l};  // if char is 0-9 or whitespace return it
      return ciph[alph.indexOf(l)];      // return the value of the cipher
    }).join("").trim();                  // trim in case of ending in whitespace
  }
}
