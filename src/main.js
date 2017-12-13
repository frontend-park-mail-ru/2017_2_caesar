import Router from 'Modules/router';
import UserService from 'Services/user-service';
import MenuView from 'Views/menu/';
import LoginView from 'Views/login/';
import RegistrationView from 'Views/registration/';
import ProfileView from 'Views/profile/';
import ScoreboardView from 'Views/scoreboard/';
import GameViewOn from 'Views/game/singleplayerOnline';
import GameViewOff from 'Views/game/singleplayerOffline';
import GameView from 'Views/game/multiplayer';

const router = new Router();
const userService = new UserService();

router.register('/', new MenuView());
router.register('/login/', new LoginView());
router.register('/signup/', new RegistrationView());
router.register('/profile/', new ProfileView());
router.register('/rating/', new ScoreboardView());
router.register('/singleplayer-online/', new GameViewOn());
router.register('/singleplayer-offline/', new GameViewOff());
router.register('/multiplayer/', new GameView());

userService.check()
  .then(() => {
    router.start();
  });
