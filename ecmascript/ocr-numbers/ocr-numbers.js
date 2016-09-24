const Ocr = () => {

  const convert = input => {
    let lines = input.split('\n');
    let transcription = [];

    lines.forEach((line, lineIndex) => {
      line.match(/.{1,3}/g).forEach((v, i) => {
        if (typeof transcription[i] === 'undefined') {transcription[i] = ''}
        transcription[i] += v
        if (lineIndex !== 3) {transcription[i] += '\n'}
      });
    });

    return transcription.map(num => {
      let matchIndex = numsArr.indexOf(num);
      if (matchIndex < 0) {
        return '?'
      }
      return String(matchIndex);
    }).join('');
  }

  return {
    convert
  }
}

export default Ocr;

const numsArr = [ 
  ' _ \n' + '| |\n' + '|_|\n' + '   ',
  '   \n' + '  |\n' + '  |\n' + '   ',
  ' _ \n' + ' _|\n' + '|_ \n' + '   ',
  ' _ \n' + ' _|\n' + ' _|\n' + '   ',
  '   \n' + '|_|\n' + '  |\n' + '   ',
  ' _ \n' + '|_ \n' + ' _|\n' + '   ',
  ' _ \n' + '|_ \n' + '|_|\n' + '   ',
  ' _ \n' + '  |\n' + '  |\n' + '   ',
  ' _ \n' + '|_|\n' + '|_|\n' + '   ',
  ' _ \n' + '|_|\n' + ' _|\n' + '   '
]
