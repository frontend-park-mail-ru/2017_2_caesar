import Router from 'Modules/router';
import UserService from 'Services/user-service';
import MenuView from 'Views/menu/';
import LoginView from 'Views/login/';
import RegistrationView from 'Views/registration/';
import ProfileView from 'Views/profile/';
import ScoreboardView from 'Views/scoreboard/';

import Game from 'Game/singleplayer/Game';
const game = new Game();

// const router = new Router();
// const userService = new UserService();
//
// router.register('/', new MenuView());
// router.register('/login/', new LoginView());
// router.register('/signup/', new RegistrationView());
// router.register('/profile/', new ProfileView());
// router.register('/rating/', new ScoreboardView());
//
// userService.loadUserData()
//   .then(() => {
//     router.login();
//     router.start();
//   })
//   .catch(() => {
//     router.unlogin();
//     router.start();
//   });
