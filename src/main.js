import Router from 'Modules/router';
import UserService from 'Services/user-service';
import MenuView from 'Views/menu/';
import LoginView from 'Views/login/';
import RegistrationView from 'Views/registration/';
import ProfileView from 'Views/profile/';
import ScoreboardView from 'Views/scoreboard/';
import GameViewSO from 'Views/game/singleplayerOnline';
import GameViewMO from 'Views/game/multiplayerOnline';

const router = new Router();
const userService = new UserService();

router.register('/', new MenuView());
router.register('/login/', new LoginView());
router.register('/signup/', new RegistrationView());
router.register('/profile/', new ProfileView());
router.register('/rating/', new ScoreboardView());
router.register('/singleplayer/', new GameViewSO());
router.register('/multiplayer/', new GameViewMO());

userService.check()
  .then((answer) => {
    if (answer.status === 'authorized') {
      router.login();
    } else {
      router.unlogin();
    }

    router.start();
  });
