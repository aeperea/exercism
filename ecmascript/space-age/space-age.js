const earthYears = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

const earthSecs = 31557600;

const twoDigits = num => {
  return Number(parseFloat(Math.round(Number(num) * 100) / 100).toFixed(2));
};

export default class SpaceAge {
  constructor(seconds) {
    this._seconds = seconds;
  }
  get seconds() {
    return this._seconds;
  }
  ageOn(planet) {
    return twoDigits(this._seconds / earthSecs / earthYears[planet]);
  }
  onEarth()   { return this.ageOn('earth');    }
  onMercury() { return this.ageOn('mercury');  }
  onVenus()   { return this.ageOn('venus');    }
  onMars()    { return this.ageOn('mars');     }
  onJupiter() { return this.ageOn('jupiter');  }
  onSaturn()  { return this.ageOn('saturn');   }
  onNeptune() { return this.ageOn('neptune');  }
  onUranus()  { return this.ageOn('uranus');   }

}
