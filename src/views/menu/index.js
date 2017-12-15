import AnonymousMenuView from 'Views/menu/anonymous';
import PlayerMenuView from 'Views/menu/player';
import Router from 'Modules/router';
import UserService from 'Services/user-service';

class MenuView {
  constructor() {
    this.player = new PlayerMenuView();
    this.anonymous = new AnonymousMenuView();

    const router = new Router();
    document.querySelector('.title').addEventListener('click', () => router.go('/'));

    this.userService = new UserService();
  }

  show() {
    if (this.userService.isLoginned()) {
      this.current = this.player;
      this.current.show();
    } else {
      this.current = this.anonymous;
      this.current.show();
    }
  }

  hide() {
    this.current.hide();
  }
}

export default MenuView;
