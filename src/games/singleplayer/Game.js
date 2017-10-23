import Background from 'Game/singleplayer/Background';
import Entity from 'Game/singleplayer/Entity';
import StateSingleplayer from 'Game/singleplayer/State';
// import Mediator from 'Modules/mediator';

class Game {
  constructor() {
    this.background = new Background();
    this.entity = new Entity();

    this.background.render();

    this.player = new StateSingleplayer(0, 0);

    window.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 37:
          this.player.updPos(-1, 0);
          break;
        case 38:
          this.player.updPos(0, -1);
          break;
        case 39:
          this.player.updPos(1, 0);
          break;
        case 40:
          this.player.updPos(0, 1);
          break;
      }
    });

    // this.mediator = new Mediator();

    this.init();
  }

  main() {
    this.entity.renderPlayer(this.player.pos);

    requestAnimationFrame(() => this.main());
  }

  init() {
    this.main();
  }
}

export default Game;
