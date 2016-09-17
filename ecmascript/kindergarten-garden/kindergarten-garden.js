const PLANTS  = {G: 'grass', C: 'clover', R: 'radishes', V: 'violets'};
const DEFAULT_STUDENTS = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];

const Garden = (diag, students = DEFAULT_STUDENTS) => {
  let diagramArr = diag.split('\n');
  let step = 2;
  let studentTable = {};

  students.sort();

  diagramArr.forEach(line => {
    [...line].forEach((plant, i) => {
      let studentIndex = Math.floor(i/step);
      if (typeof studentTable[students[studentIndex].toLowerCase()] === 'undefined') {
        studentTable[students[studentIndex].toLowerCase()] = [];
      } 
      studentTable[students[studentIndex].toLowerCase()].push(PLANTS[plant]);
    });
  });

  return studentTable;
};

export default Garden;
