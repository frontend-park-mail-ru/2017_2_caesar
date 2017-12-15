import Block from 'Components/block/index';
import ProfileTemplate from 'Components/template/profile.pug';

class Profile extends Block {
  constructor() {
    const element = document.createElement('div');
    super(element);

    this.addClasses(['form']);
  }

  update(user) {
    this.clear();
    this.setHTML(ProfileTemplate({ user }));
  }
}

export default Profile;
