import Block from '../block/index';
import ScoreboardTemplate from '../template/scoreboard.pug';

class Scoreboard extends Block {
  constructor() {
    const element = document.createElement('table');
    super(element);
  }

  update(users = []) {
    this.clear();

    this.element.innerHTML = ScoreboardTemplate({ users });
  }
}

export default Scoreboard;
