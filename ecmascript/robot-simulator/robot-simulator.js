const directions = ['east', 'south', 'west', 'north'];
const maps       = {R: 'turnRight', L: 'turnLeft', A: 'advance'};

export default class Robot {
  constructor() {
    this.bearing = 'north';
    this.coordinates = [0, 0];
  }

  orient(dir) {
    if (directions.indexOf(dir) === -1) {return 'Invalid Robot Bearing';}
    this.bearing = dir;
  }

  turnRight() {
    this.bearing = directions.concat(directions)[directions.indexOf(this.bearing) + 1];
  }

  turnLeft() {
    directions.reverse();
    this.turnRight();
    directions.reverse();
  }

  advance() {
    switch (this.bearing) {
    case 'north' :
      this.coordinates[1]++;
      break;
    case 'east' :
      this.coordinates[0]++;
      break;
    case 'south' :
      this.coordinates[1]--;
      break;
    case 'west' :
      this.coordinates[0]--;
      break;
    }
  }

  at(x,y) {
    this.coordinates = [x, y];
  }

  place(position) {
    this.coordinates = [position.x, position.y];
    this.bearing     = position.direction;
  }

  evaluate(inst) {
    this.instructions(inst).forEach(I => {
      switch (I) {
      case 'turnLeft':
        this.turnLeft();
        break;
      case 'turnRight':
        this.turnRight();
        break;
      case 'advance':
        this.advance();
        break;
      }
    });
  }

  instructions(inst) {
    return [...inst].map(n => maps[n]);
  }

};
