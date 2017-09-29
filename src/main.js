import Router from 'Modules/router';
import MenuView from 'Views/menu/';
import LoginView from 'Views/login/';
import RegistrationView from 'Views/registration/';
import ProfileView from 'Views/profile/';
import ScoreboardView from 'Views/scoreboard/';
import UserService from 'Services/user-service';

const router = new Router();
const userService = new UserService();

userService.logout();

router.register('/', new MenuView());
router.register('/login/', new LoginView());
router.register('/signup/', new RegistrationView());
router.register('/profile/', new ProfileView());
router.register('/rating/', new ScoreboardView());

router.start();

router.go('/login/');
