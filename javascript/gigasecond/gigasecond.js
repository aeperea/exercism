var Gigasecond = function(date) {this.dateValue = date;};

Gigasecond.prototype.date = function() {
  // getTime() returns millisecs so... -> + 1e12
  var date = new Date(this.dateValue.getTime() + 1e12);
  return date;
};

module.exports = Gigasecond;
