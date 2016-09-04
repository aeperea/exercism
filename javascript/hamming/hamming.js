var Hamming = function() {};

Hamming.prototype.compute = function(str1, str2) {
  if (str1.length !== str2.length) { throw new Error('DNA strands must be of equal length.'); return;}

  var counter = 0;
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) { counter++; }
  }

  return counter;
};

module.exports = Hamming;
