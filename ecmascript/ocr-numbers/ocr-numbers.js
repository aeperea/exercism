const Ocr = () => {

  const convert = input => {
    let lines = input.split('\n');

    if (lines.length > 4) {
      let multiLines = lines.length / 4;
      let newLines = [];
      for (let i = 0; i < multiLines; i++) {
        let section = lines.slice(i * 4, (i + 1)*4)
        newLines.push(threeRowAnalysis(section))
      }
      return newLines.join(',');
    } else {
      return threeRowAnalysis(lines);
    }
  }

  const threeRowAnalysis = (lines) => {
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
      return (matchIndex < 0) ? '?' : matchIndex.toString()
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
