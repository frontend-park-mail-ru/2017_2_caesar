import AnonymousMenuView from 'Views/menu/anonymous';
import PlayerMenuView from 'Views/menu/player';
import Router from 'Modules/router';

class MenuView {
  constructor() {
    this.player = new PlayerMenuView();
    this.anonymous = new AnonymousMenuView();
    
    this.router = new Router();
  }

  show() {
    if (this.router.isLoginned()) {
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
