import Block from 'Components/block/';
import LoginForm from 'Components/form/login';
import BaseView from 'Views/base/';
import Router from 'Modules/router';
import UserService from 'Services/user-service';

class LoginView extends BaseView {
  constructor() {
    super('div');

    this.addClasses(['form']);

    this.header = Block.create('div', {}, []);
    this.header.login = Block.create('button', {}, ['btn', 'btn-default', 'form__header-button'], 'Авторизация');
    this.header.registration = Block.create('button', {}, ['btn', 'btn-default', 'form__header-button'], 'Регистрация');

    this.content = Block.create('div', {}, []);
    this.content.login = new LoginForm();

    this.render();

    this.addListener();
  }

  render() {
    this.header
      .append(this.header.login)
      .append(this.header.registration);

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

    this.content.login.onSubmit((userData) => {
      userService.login(userData)
        .then(() => {
          router.login();
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
