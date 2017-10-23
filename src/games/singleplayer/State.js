class StateSingleplayer {
  constructor(x, y) {
    if (StateSingleplayer.instance) {
      return StateSingleplayer.instance;
    }

    this.pos = {
      x,
      y,
    };

    this.score = 0;

    StateSingleplayer.instance = this;
  }

  updPos(dx, dy) {
    this.pos = {
      x: this.pos.x + dx,
      y: this.pos.y + dy,
    };
  }

  updScore(dscore) {
    this.score += dscore;
  }
}

export default StateSingleplayer;
