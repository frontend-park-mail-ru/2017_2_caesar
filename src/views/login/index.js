import Block from 'Components/block/';
import LoginForm from 'Components/form/login';
import BaseView from 'Views/base/';
import Router from 'Modules/router';
import UserService from 'Services/user-service';

class LoginView extends BaseView {
  constructor() {
    super('div');

    this.addClasses(['block-form']);

    this.header = Block.create('div', {}, ['block-form-header']);
    this.header.login = Block.create('button', {}, ['btn', 'btn-default', 'block-form-header-button'], 'Авторизация');
    this.header.registration = Block.create('button', {}, ['btn', 'btn-default', 'block-form-header-button'], 'Регистрация');

    this.content = Block.create('div', {}, ['block-form-content']);
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
          router.go('/');
        })
        .catch((err) => {
          switch (+err.status) {
            case 400: this.content.login.setErrorMessage('Вы не зарегистрированы!'); break;
            case 403:
              this.content.login.setErrorMessage('Неверный пароль!');
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
