import Block from 'Components/block/';
import BaseView from 'Views/base/';
import Router from 'Modules/router';
import UserService from 'Services/user-service';

class AnonymousMenuView extends BaseView {
  constructor() {
    super('div');

    this.addClasses(['menu']);

    this.header = Block.create('h2', {}, ['menu__header'], 'Меню');

    this.single = Block.create('input', {
      type: 'button',
      value: 'Singleplayer',
    }, ['btn', 'btn-default', 'menu__button']);

    this.rating = Block.create('input', {
      type: 'button',
      value: 'Рейтинг',
    }, ['btn', 'btn-default', 'menu__button']);

    this.signin = Block.create('input', {
      type: 'button',
      value: 'Sign In',
    }, ['btn', 'btn-default', 'menu__button']);

    this.signup = Block.create('input', {
      type: 'button',
      value: 'Sign Up',
    }, ['btn', 'btn-default', 'menu__button']);

    this.render();

    this.addListener();
  }

  render() {
    this
      .append(this.header)
      .append(this.single)
      .append(this.rating)
      .append(this.signin)
      .append(this.signup);
  }

  addListener() {
    const router = new Router();

    this.single.on('click', () => {
      router.go('/singleplayer-offline/');
    });
    this.rating.on('click', () => {
      router.go('/rating/');
    });
    this.signin.on('click', () => {
      router.go('/login/');
    });
    this.signup.on('click', () => {
      router.go('/signup/');
    });
  }
}

export default AnonymousMenuView;
