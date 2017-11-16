import Router from 'Modules/router';
import UserService from 'Services/user-service';
import MenuView from 'Views/menu/';
import LoginView from 'Views/login/';
import RegistrationView from 'Views/registration/';
import ProfileView from 'Views/profile/';
import ScoreboardView from 'Views/scoreboard/';
import GameView from 'Views/game/';

const router = new Router();
const userService = new UserService();

router.register('/', new MenuView());
router.register('/login/', new LoginView());
router.register('/signup/', new RegistrationView());
router.register('/profile/', new ProfileView());
router.register('/rating/', new ScoreboardView());
router.register('/singleplayer/', new GameView());

const ws = new WebSocket('https://tp-2017-2-caesar-backend.herokuapp.com/game');

ws.onopen = () => {
  alert('Connection opened...');
  ws.send('seva');
};

userService.loadUserData()
  .then(() => {
    router.login();
    router.start();
  })
  .catch(() => {
    router.unlogin();
    router.start();
  });
