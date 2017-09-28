import UserService from './services/user-service';
import Block from './components/block/';
import RegistrationForm from './components/registrationForm/';
import LoginForm from './components/loginForm/';
import Profile from './components/profile/';
import Scoreboard from './components/scoreboard/';

const formBlock = Block.create('div', {hidden: 'hidden'}, ['block-form']);
formBlock.header = Block.create('div', {}, ['block-form-header']);
formBlock.content = Block.create('div', {}, ['block-form-content']);

formBlock.content.login = new LoginForm();
formBlock.content.registration = new RegistrationForm();

formBlock.header.login = Block.create('button', {}, ['btn', 'btn-default'], 'Авторизация');
formBlock.header.login.on('click', () => {
  formBlock.content.registration.hide();
  openLogin();
});

formBlock.header.registration = Block.create('button', {}, ['btn', 'btn-default'], 'Регистрация');
formBlock.header.registration.on('click', () => {
  formBlock.content.login.hide();
  openRegistration();
});

formBlock.header
  .append(formBlock.header.login)
  .append(formBlock.header.registration);

formBlock.content
  .append(formBlock.content.login)
  .append(formBlock.content.registration);

formBlock
  .append(formBlock.header)
  .append(formBlock.content);

const menu = Block.create('div', {hidden: 'hidden'}, ['app-menu']);
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

const profile = Block.create('div', {hidden: 'hidden'});
profile.content = new Profile();
profile.back = Block.create('input', {
  type: 'button',
  value: 'Вернуться',
}, ['btn', 'btn-default']);
profile.on('click', () => {
  profile.hide();
  openMenu();
});

profile
  .append(profile.content)
  .append(profile.back);

const scoreboard = Block.create('div', {hidden: 'hidden'});
scoreboard.content = new Scoreboard();
scoreboard.back = Block.create('input', {
  type: 'button',
  value: 'Вернуться',
}, ['btn', 'btn-default']);
scoreboard.on('click', () => {
  scoreboard.hide();
  openMenu();
});

scoreboard
  .append(scoreboard.content)
  .append(scoreboard.back);

const app = new Block(document.querySelector('.block'));
app
  .append(formBlock)
  .append(menu)
  .append(profile)
  .append(scoreboard);

const userService = new UserService();

function openRegistration() {
  formBlock.content.registration.show();
  if (!formBlock.content.registration.ready) {
    formBlock.content.registration.onSubmit(body => userService.signup(body)
      .then(() => {
        formBlock.hide();
        formBlock.content.registration.reset();
        openMenu();
      })
      .catch((err) => {
        console.log(+err.status);
      }));
    formBlock.content.registration.ready = true;
  }
}

function openLogin() {
  formBlock.content.login.show();
  if (!formBlock.content.login.ready) {
    formBlock.content.login.onSubmit(body => userService.login(body)
      .then((res) => {
        formBlock.hide();
        formBlock.content.login.reset();
        openMenu();
      })
      .catch((err) => {
        console.log(+err.status);
      }));
    formBlock.content.login.ready = true;
  }
}

function openMenu() {
  menu.show();
  if (!menu.ready) {
    menu.profile.on('click', () => {
      userService.loadUserData()
        .then((res) => {
          profile.content.update(res);
          menu.hide();
          profile.show();
        })
        .catch(err => console.log(err));
    });
    menu.rating.on('click', () => {
      userService.loadUsersList()
        .then((res) => {
          scoreboard.content.update(res);
          menu.hide();
          scoreboard.show();
        })
        .catch(err => console.log(err));
    });
    menu.logout.on('click', () => {
      userService.logout()
        .then(() => {
          menu.hide();
          openAuth();
        });
    });
  }
  menu.ready = true;
}

function openAuth() {
  formBlock.content.registration.hide();
  formBlock.show();
  openLogin();
}

openAuth();
