import Block from 'Components/block/';
import BaseView from 'Views/base/';
import Router from 'Modules/router';
import UserService from 'Services/user-service';

class PlayerMenuView extends BaseView {
  constructor() {
    super('div');

    this.addClasses(['app-menu']);

    this.header = Block.create('h2', {}, ['app-menu-header'], 'Меню');

    this.single = Block.create('input', {
      type: 'button',
      value: 'Singleplayer',
    }, ['btn', 'btn-default', 'app-menu-button', 'menu-button-play']);

    this.multi = Block.create('input', {
      type: 'button',
      value: 'Multiplayer',
    }, ['btn', 'btn-default', 'app-menu-button', 'menu-button-play']);

    this.profile = Block.create('input', {
      type: 'button',
      value: 'Профиль',
    }, ['btn', 'btn-default', 'app-menu-button', 'menu-button-profile']);

    this.rating = Block.create('input', {
      type: 'button',
      value: 'Рейтинг',
    }, ['btn', 'btn-default', 'app-menu-button', 'menu-button-rating']);

    this.logout = Block.create('input', {
      type: 'button',
      value: 'Выйти',
    }, ['btn', 'btn-default', 'app-menu-button', 'menu-button-logout']);

    this.render();

    this.addListener();
  }

  render() {
    this
      .append(this.header)
      .append(this.single)
      .append(this.multi)
      .append(this.profile)
      .append(this.rating)
      .append(this.logout);
  }

  addListener() {
    const router = new Router();
    const userService = new UserService();

    this.single.on('click', () => {
      router.go('/singleplayer/');
    });
    this.multi.on('click', () => {
      router.go('/multiplayer/');
    });
    this.profile.on('click', () => {
      router.go('/profile/');
    });
    this.rating.on('click', () => {
      router.go('/rating/');
    });
    this.logout.on('click', () => {
      router.unlogin();
      router.go('/login/');
      userService.logout();
    });
  }
}

export default PlayerMenuView;
