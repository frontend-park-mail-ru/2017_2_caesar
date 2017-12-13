import AnonymousMenuView from 'Views/menu/anonymous';
import PlayerMenuView from 'Views/menu/player';
import UserService from 'Services/user-service';

class MenuView {
  constructor() {
    this.player = new PlayerMenuView();
    this.anonymous = new AnonymousMenuView();

    this.userService = new UserService();
  }

  show() {
    if (this.userService.isLoginned()) {
      this.current = this.player;
      this.player.show();
    } else {
      this.current = this.anonymous;
      this.anonymous.show();
    }
  }

  hide() {
    this.current.hide();
  }
}

export default MenuView;
