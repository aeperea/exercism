const maps = {3: "i", 5: "a", 7: "o"};

export default class Raindrops {
  convert(n) {
    let message = [3,5,7].map(factor => {
      if (n % factor === 0) {return `Pl${maps[factor]}ng`;}
      else { return ''; }
    }).join("")

    return message == '' ? n.toString() :  message;
  }
}
