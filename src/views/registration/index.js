import Block from 'Components/block/';
import RegistrationForm from 'Components/form/registration';
import BaseView from 'Views/base/';
import Router from 'Modules/router';
import UserService from 'Services/user-service';

class RegistrationView extends BaseView {
  constructor() {
    super('div');

    this.addClasses(['form']);

    this.header = Block.create('div', {}, []);
    this.header.login = Block.create('button', {}, ['btn', 'btn-default', 'form__header-button'], 'Авторизация');
    this.header.registration = Block.create('button', {}, ['btn', 'btn-default', 'form__header-button'], 'Регистрация');

    this.content = Block.create('div', {}, []);
    this.content.registration = new RegistrationForm();

    this.render();

    this.addListener();
  }

  render() {
    this.header
      .append(this.header.login)
      .append(this.header.registration);

    this.content
      .append(this.content.registration);

    this
      .append(this.header)
      .append(this.content);
  }

  addListener() {
    const router = new Router();
    const userService = new UserService();

    this.header.login.on('click', () => {
      router.go('/login/');
    });

    this.content.registration.onSubmit((userData) => {
      userService.signup(userData)
        .then(() => {
          router.go('/');
        })
        .catch((err) => {
        console.log(err)
          switch (+err.status) {
            case 409:
              this.content.registration.setErrorMessage('Email уже зарегистрирован!');
              break;
            default:
              console.log('Unknown error!');
              break;
          }
        });
    });
  }

  hide() {
    this.content.registration.reset();
    super.hide();
  }
}

export default RegistrationView;
