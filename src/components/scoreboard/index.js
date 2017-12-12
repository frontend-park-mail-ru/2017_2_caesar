import Block from 'Components/block/index';
import ScoreboardTemplate from 'Components/template/scoreboard.pug';

class Scoreboard extends Block {
  constructor() {
    const element = document.createElement('div');
    super(element);

    this.addClasses(['form']);
  }

  update(users = []) {
    this.clear();
    this.setHTML(ScoreboardTemplate({ users }));
  }
}

export default Scoreboard;
