"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var School = (function () {
  function School() {
    _classCallCheck(this, School);

    this.schoolClass = {};
  }

  _createClass(School, [{
    key: "roster",
    value: function roster() {
      return JSON.parse(JSON.stringify(this.schoolClass));
    }
  }, {
    key: "add",
    value: function add(studentName, grade) {
      if (!this.schoolClass[grade]) {
        this.schoolClass[grade] = [];
      }
      this.schoolClass[grade].push(studentName);
      this.sortGrade(grade);
    }
  }, {
    key: "sortGrade",
    value: function sortGrade(n) {
      this.schoolClass[n] = this.schoolClass[n].sort();
    }
  }, {
    key: "grade",
    value: function grade(gradeNum) {
      if (!this.schoolClass[gradeNum]) {
        this.schoolClass[gradeNum] = [];
      }
      return this.schoolClass[gradeNum].sort();
    }
  }]);

  return School;
})();

exports["default"] = School;
module.exports = exports["default"];