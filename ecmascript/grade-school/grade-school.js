export default class School {
  constructor() {
    this.schoolClass = {};
  }
  roster() {
    return JSON.parse(JSON.stringify(this.schoolClass));
  }
  add(studentName, grade) {
    if (!this.schoolClass[grade]) {
      this.schoolClass[grade] = [];
    }
    this.schoolClass[grade].push(studentName);
    this.sortGrade(grade);
  }
  sortGrade(n) {
    this.schoolClass[n] = this.schoolClass[n].sort()
  }
  grade(gradeNum) {
    if (!this.schoolClass[gradeNum]) {
      this.schoolClass[gradeNum] = [];
    }
    return this.schoolClass[gradeNum].sort();
  }
}
