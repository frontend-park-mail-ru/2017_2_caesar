import Block from '../block/index';
import ScoreboardTemplate from '../template/scoreboard.pug';

class Scoreboard extends Block {
  constructor() {
    const element = document.createElement('div');
    super(element);

    this.addClasses(['block-form']);
  }

  update(users = []) {
    this.clear();
    this.setHTML(ScoreboardTemplate({ users }));
  }
}

export default Scoreboard;
