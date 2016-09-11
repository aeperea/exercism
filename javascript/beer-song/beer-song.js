function BeerSong() {
  this.getFirstLine = function(n) {
    if (n === 0) {
      return "No more bottles of beer on the wall, no more bottles of beer.";
    } else if (n === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.";
    } else {
      n = String(n);
      return n + " bottles of beer on the wall, " + n + " bottles of beer.";
    }
  }

  this.getSecondLine = function(n) {
    if (n === 0) {
      return "Go to the store and buy some more, 99 bottles of beer on the wall.";
    } else if (n - 1 === 0){
      return "Take it down and pass it around, no more bottles of beer on the wall.";
    } else if (n - 1 === 1) {
      return "Take one down and pass it around, 1 bottle of beer on the wall.";
    } else {
      num = String(n - 1);
      return "Take one down and pass it around, " + num + " bottles of beer on the wall.";
    }
  }

  this.verse = function(n){
    return this.getFirstLine(n) + "\n" + this.getSecondLine(n) + "\n";
  }

  this.sing = function(from, til) {
    if (typeof from === "undefined") {from = 99;}
    if (typeof til  === "undefined") {til = 0;}

    var song = "";

    for (var i = from; i >= til; i--) {
      song += this.verse(i);
      if (i !== 0 && i !== til) {
        song += "\n"
      }
    }
    return song;
  }
};

module.exports = BeerSong;
