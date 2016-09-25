export default (str) => {
  let openedBracks = [];
  let counts = [0, 0, 0];

  [...str].forEach(c => {
    if (c === '{') {openedBracks.push(c); counts[0]++; }
    if (c === '}') {checkLast(c, openedBracks); counts[0]--; }
    if (c === '[') {openedBracks.push(c); counts[1]++;}
    if (c === ']') {checkLast(c, openedBracks); counts[1]--;}
    if (c === '(') {openedBracks.push(c); counts[2]++;}
    if (c === ')') {checkLast(c, openedBracks); counts[2]--;}
  });

  return (openedBracks.length === 0 && sum(counts) === 0)
}

const checkLast = (bracket, opened) => {
  let lastOpen = opened[opened.length - 1];
  if (lastOpen === '{' && bracket === '}') {opened.pop(); return;}
  if (lastOpen === '[' && bracket === ']') {opened.pop(); return;}
  if (lastOpen === '(' && bracket === ')') {opened.pop(); return;}
}

const sum = arr => arr.reduce((o,v) => (o + v), 0);
