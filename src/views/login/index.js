import Block from 'Components/block/';
import LoginForm from 'Components/form/login';
import BaseView from 'Views/base/';
import Router from 'Modules/router';
import UserService from 'Services/user-service';

class LoginView extends BaseView {
  constructor() {
    super('div', ['form']);

    this.header = Block.create('div', {
    }, ['form__actions']);
    this.header.registration = Block.create('button', {
    }, ['form__button'], 'Регистрация');
    this.header.menu = Block.create('button', {
    }, ['form__button'], 'Меню');

    this.content = Block.create('div', {}, []);
    this.content.login = new LoginForm();

    this.render();

    this.addListener();
  }

  render() {
    this.header
      .append(this.header.registration)
      .append(this.header.menu);

    this.content
      .append(this.content.login);

    this
      .append(this.header)
      .append(this.content);
  }

  addListener() {
    const router = new Router();
    const userService = new UserService();

    this.header.registration.on('click', () => {
      router.go('/signup/');
    });

    this.header.menu.on('click', () => {
      router.go('/');
    });

    this.content.login.onSubmit((userData) => {
      userService.login(userData)
        .then(() => {
          router.go('/');
        })
        .catch((err) => {
          switch (+err.status) {
            case 403:
              this.content.login.setErrorMessage('Неверный пароль!');
              break;
            case 404:
              this.content.login.setErrorMessage('Вы не зарегистрированы!');
              break;
            case 418:
              this.content.login.setErrorMessage('Вы уже авторизованы!');
              break;
            default:
              console.log('Unknown error!');
              break;
          }
        });
    });
  }

  hide() {
    this.content.login.reset();
    super.hide();
  }
}

export default LoginView;
