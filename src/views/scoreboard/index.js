import ContentView from 'Views/content/';
import UserService from 'Services/user-service';
import Header from 'Components/header/';
import Scoreboard from 'Components/scoreboard/';

class ScoreboardView extends ContentView {
  constructor() {
    const header = new Header('Рейтинг');
    const content = new Scoreboard();
    super(header, content);
  }

  show() {
    this.update();
    super.show();
  }

  update() {
    const userService = new UserService();
    userService.loadUsersList().then((res) => {
      this.content.update(res);
    });
  }
}

export default ScoreboardView;
