var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function(str1) {
  var dnaMapping = {'C':'G', 'G':'C', 'A':'U', 'T':'A'};

  var mappedStr = str1.split("").map(function(nucl) {
    return dnaMapping[nucl];
  }).join("");

  return mappedStr;
};


module.exports = DnaTranscriber;
