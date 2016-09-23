"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomSet = (function () {
  function CustomSet() {
    var values = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    _classCallCheck(this, CustomSet);

    this.values = this.checkDuplicates(values);
  }

  _createClass(CustomSet, [{
    key: "checkDuplicates",
    value: function checkDuplicates(values) {
      var results = [];
      values.forEach(function (v) {
        if (results.indexOf(v) < 0) {
          results.push(v);
        }
      });
      results.sort();

      return results;
    }
  }, {
    key: "eql",
    value: function eql(set) {
      var _this = this;

      var areEqual = true;
      set.values.forEach(function (val, i) {
        if (_this.values[i] !== val) {
          areEqual = false;
        }
      });

      return areEqual;
    }
  }, {
    key: "difference",
    value: function difference(set) {
      var noMatch = [];
      this.values.forEach(function (val) {
        var matchIndex = set.values.indexOf(val);
        if (matchIndex < 0) {
          noMatch.push(val);
        }
      });
      return new CustomSet(noMatch);
    }
  }, {
    key: "disjoint",
    value: function disjoint(set) {
      var _this2 = this;

      var isDisjoint = true;
      set.values.forEach(function (val) {
        var index = _this2.values.indexOf(val);
        if (index >= 0) {
          isDisjoint = false;
        }
      });

      return isDisjoint;
    }
  }, {
    key: "delete",
    value: function _delete(n) {
      var index = this.values.indexOf(n);
      if (index >= 0) {
        this.values.splice(index, 1);
      }
      return this;
    }
  }, {
    key: "empty",
    value: function empty() {
      this.values = [];
      return this;
    }
  }, {
    key: "intersection",
    value: function intersection(set) {
      var matches = [];
      this.values.forEach(function (val) {
        var index = set.values.indexOf(val);
        if (index >= 0) {
          matches.push(val);
        }
      });

      return new CustomSet(matches);
    }
  }, {
    key: "member",
    value: function member(n) {
      var index = this.values.indexOf(n);
      if (index >= 0) {
        return true;
      }
      return false;
    }
  }, {
    key: "put",
    value: function put(n) {
      this.values.push(n);
      this.values.sort();
      return this;
    }
  }, {
    key: "size",
    value: function size() {
      return this.values.length;
    }
  }, {
    key: "toList",
    value: function toList() {
      return this.values;
    }
  }, {
    key: "subset",
    value: function subset(set) {
      var _this3 = this;

      var isSubset = true;
      set.values.forEach(function (v) {
        if (_this3.values.indexOf(v) < 0) {
          isSubset = false;
        }
      });

      return isSubset;
    }
  }, {
    key: "union",
    value: function union(set) {
      return new CustomSet(set.values.concat(this.values));
    }
  }]);

  return CustomSet;
})();

exports["default"] = CustomSet;
module.exports = exports["default"];