import Block from '../block/index';
import ProfileTemplate from '../template/profile.pug';

class Profile extends Block {
  constructor() {
    const element = document.createElement('div');
    super(element);
  }

  update(user) {
    this.clear();

    this.element.innerHTML = ProfileTemplate({ user });
  }
}

export default Profile;
