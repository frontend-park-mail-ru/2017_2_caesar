import UserService from './services/user-service';
import Block from './components/block/';
import RegistrationForm from './components/registrationForm/';
import LoginForm from './components/loginForm/';
import Scoreboard from './components/scoreboard/';

const registration = Block.create('div', { hidden: 'hidden' }, ['block', 'registration-block']);
registration.header = Block.create('h2', {}, ['app-form-header'], 'Регистрация');
registration.form = new RegistrationForm();

registration
  .append(registration.header)
  .append(registration.form);

const login = Block.create('div', { hidden: 'hidden' }, ['block', 'login-block']);
login.header = Block.create('h2', {}, ['app-form-header'], 'Авторизация');
login.form = new LoginForm();
login.button = Block.create('button', {}, ['btn', 'btn-default'], 'Регистрация');
login.button.on('click', () => {
  login.hide();
  openRegistration();
});

login
  .append(login.header)
  .append(login.form)
  .append(login.button);

const menu = Block.create('div', { hidden: 'hidden' }, ['block', 'app-menu']);
menu.header = Block.create('h2', {}, ['app-menu-header'], 'Меню');
menu.play = Block.create('input', {
  type: 'button',
  value: 'Играть',
}, ['btn', 'btn-default', 'app-menu-button', 'menu-button-play']);
menu.profile = Block.create('input', {
  type: 'button',
  value: 'Профиль',
}, ['btn', 'btn-default', 'app-menu-button', 'menu-button-profile']);
menu.rating = Block.create('input', {
  type: 'button',
  value: 'Рейтинг',
}, ['btn', 'btn-default', 'app-menu-button', 'menu-button-rating']);
menu.logout = Block.create('input', {
  type: 'button',
  value: 'Выйти',
}, ['btn', 'btn-default', 'app-menu-button', 'menu-button-logout']);

menu
  .append(menu.header)
  .append(menu.play)
  .append(menu.profile)
  .append(menu.rating)
  .append(menu.logout);

const scoreboard = new Scoreboard();
scoreboard.hide();

const app = new Block(document.querySelector('.app'));

app
  .append(registration)
  .append(login)
  .append(menu)
  .append(scoreboard);

const userService = new UserService();

function openRegistration() {
  registration.show();
  if (!registration.ready) {
    registration.form.onSubmit(body => userService.signup(body)
      .then((res) => {
        console.log(res);
        registration.hide();
        registration.form.reset();
        openMenu();
      })
      .catch((err) => {
        console.log(+err.status);
      }));
    registration.ready = true;
  }
}

function openLogin() {
  login.show();
  if (!login.ready) {
    login.form.onSubmit(body => userService.login(body)
      .then(() => {
        login.hide();
        login.form.reset();
        openMenu();
      })
      .catch((err) => {
        console.log(+err.status);
      }));
    login.ready = true;
  }
}

function openMenu() {
  menu.show();
  if (!menu.ready) {
    menu.profile.on('click', () => {
      userService.getData()
        .then((res) => {
          console.log(res);
        })
        .catch(err => console.log(err));
    });
    menu.rating.on('click', () => {
      userService.loadUsersList()
        .then((res) => {
          console.log(res);
          scoreboard.update(res);
          menu.hide();
          scoreboard.show();
        })
        .catch(err => console.log(err));
    });
    menu.logout.on('click', () => {
      userService.logout()
        .then(() => {
          menu.hide();
          openLogin();
        });
    });
  }
}

function openProfile() {
}

openLogin();
