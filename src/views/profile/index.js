import ContentView from 'Views/content/';
import UserService from 'Services/user-service';
import Header from 'Components/header/';
import Profile from 'Components/profile/';

class ProfileView extends ContentView {
  constructor() {
    const header = new Header('Профиль');
    const content = new Profile();
    super(header, content);
  }

  show() {
    this.update();
    super.show();
  }

  update() {
    const userService = new UserService();
    userService.loadUserData().then((res) => {
      this.content.update(res);
    });
  }
}

export default ProfileView;
