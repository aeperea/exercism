const Queens = ({white = [0,3], black = [7,3]} = {}) => {

  if (white[0] === black[0] && white[1] === black[1]) {
    return 'Queens cannot share the same space.';
  }

  const canAttack = () => {
    if (white[0] === black[0]) { return true; }
    if (white[1] === black[1]) { return true; }
    if (delta() === 1)      { return true; }

    return false;
  };

  const delta = () => {
    return Math.abs((white[0] - black[0]) / (white[1] - black[1]))
  };

  const toString = () => {
    let board = '';

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (white[0] === r && white[1] === c) {
          board += 'W';
        } else if (black[0] === r && black[1] === c) {
          board += 'B';
        } else {
          board += '_';
        }

        if (c === 7) {board += '\n';} else {board += ' ';}
      }
    }

    return board;
  }

  return {white, black, canAttack, toString}
};

export default Queens;
