import Block from 'Components/block/';
import BaseView from 'Views/base/';
import Router from 'Modules/router';
import UserService from 'Services/user-service';

class AnonymousMenuView extends BaseView {
  constructor() {
    super('div');

    this.addClasses(['menu']);

    this.relativeBlock = [];

    for (let i = 0; i < 3; i++) {
      this.relativeBlock[i] = Block.create('div', {
      }, ['menu__relativeBlock']);
    }

    this.singleImg = Block.create('span', {
    }, ['menu__img', 'menu__img_anonymous']);

    this.signinImg = Block.create('span', {
    }, ['menu__img', 'menu__img_signin']);

    this.signupImg = Block.create('span', {
    }, ['menu__img', 'menu__img_signup']);

    this.single = Block.create('div', {
    }, ['menu__button'], 'Одиночная игра');

    this.signin = Block.create('div', {
    }, ['menu__button'], 'Войти');

    this.signup = Block.create('div', {
    }, ['menu__button'], 'Регистрация');

    this.render();

    this.addListener();
  }

  render() {
    this
      .append(this.relativeBlock[0]
        .append(this.single)
        .append(this.singleImg))
      .append(this.relativeBlock[1]
        .append(this.signin)
        .append(this.signinImg))
      .append(this.relativeBlock[2]
        .append(this.signup)
        .append(this.signupImg));
  }

  addListener() {
    const router = new Router();

    this.single.on('click', () => {
      router.go('/singleplayer-offline/');
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
