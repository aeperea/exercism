const mapUnit = {0:'', 1:'one', 2:'two', 3:'three', 4: 'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'};
const mapTeen = {10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14: 'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen'};
const mapDecs = {0:'', 2:'twenty', 3:'thirty', 4: 'forty', 5:'fifty', 6:'sixty', 7:'seventy', 8:'eighty', 9:'ninety'};
const mapOrd  = {0:'', 1:'thousand', 2: 'million', 3:'billion'};

export default class Say {
  inEnglish(num) {
    if (num >= 1e12 || num < 0) {throw new Error('Number must be between 0 and 999,999,999,999.'); }
    num = num.toString();
    if (num === '0') {return 'zero'; }

    let arr = breakBy3(num);
    let englishArr = arr.map((triad, order) => {
      if (Number(triad) === 0) {return '';}
      return `${analyzeThreeDigit(triad)} ${mapOrd[order]}`.trim();
    });
    return englishArr.reverse().join(' ').trim().replace("  ", " ");
  }

}

const analyzeThreeDigit = n => {
  let size = n.length;
  if (size === 3) {
    let decUnit = getDecs(n[1] + n[2]);
    if (n[0] === '0') {
      return decUnit;
    }
    return `${mapUnit[n[0]]} hundred ${decUnit}`;
  } else if (size === 2){
    let decUnit = getDecs(n[0] + n[1]);
    return decUnit.trim();
  } else {
    return `${mapUnit[n[0]]}`
  }
}

const getDecs = n => {
  if (n[0] === '1') {
    return mapTeen[n[0] + n[1]];
  } else {
    if (n[0] === '0') {
      return mapUnit[n[1]];
    }
    if (n[1] === '0') {
      return mapDecs[n[0]];
    }
    return mapDecs[n[0]] + '-' + mapUnit[n[1]];
  }
}

const breakBy3 = n => {
  return [...n]
    .reverse()
    .join('')
    .match(/.{1,3}/g)
    .map(s => [...s].reverse().join(''));
} 
