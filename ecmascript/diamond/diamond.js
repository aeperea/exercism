export default class Diamond {
  makeDiamond(l){
    let inputIndex  = alphabet.indexOf(l) + 1;
    let diamondSize = 1 + 2*(inputIndex - 1);
    let letterIndex = 0;
    let resArray    = [];

    for (let row = 1; row <= inputIndex; row++) {
      let line = '';
      for (let col = 1; col <= diamondSize; col++) {
        if (row + col - 1 === inputIndex ||
           (diamondSize - col) + row === inputIndex) {
          line += alphabet[letterIndex];
        } else {
          line += ' ';
        }
      }
      resArray.push(line);
      letterIndex++;
    }

    for (let r = inputIndex - 2; r >= 0; r--) {
      let line = resArray[r];
      resArray.push(line);
    }

    return resArray.join('\n') + '\n';
  }
}

const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
