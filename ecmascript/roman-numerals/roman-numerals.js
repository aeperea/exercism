export default (num) => {
  let romanNum    = [];
  let reversedNum = [...num.toString()].reverse();
  let maxOrder    = reversedNum.length;
  for (let order = 3; order >= 0 ; order--) {
    if (order < maxOrder) {
      romanNum.push(getRomanNumber(Number(reversedNum[order]), order))
    }
  }
  return romanNum.join("");
};

const getRomanNumber = (n, order) => {
  let romanChars = numerals(order);
  if (n <= 3) {return mult(romanChars['one'], n);}
  if (n == 4) {return romanChars['one']  + romanChars['five'];}
  if (n <= 8) {return romanChars['five'] + mult(romanChars['one'], n-5);}
  if (n == 9) {return romanChars['one']  + romanChars['ten'];}
}

const mult = (c, n) => {
  let letters = [];
  for (let i = 0; i < n; i++) {
    letters.push(c);
  }
  return letters.join("");
}

const numerals = order => {
  if (order === 0) {return {one: "I", five: "V", ten: "X"};}
  if (order === 1) {return {one: "X", five: "L", ten: "C"};}
  if (order === 2) {return {one: "C", five: "D", ten: "M"};}
  if (order === 3) {return {one: "M"};}
}
