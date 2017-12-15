import Block from 'Components/block/';
import BaseView from 'Views/base/';
import Router from 'Modules/router';
import UserService from 'Services/user-service';

class PlayerMenuView extends BaseView {
  constructor() {
    super('div');

    this.addClasses(['menu']);

    this.relativeBlock = [];

    for (let i = 0; i < 5; i++) {
      this.relativeBlock[i] = Block.create('div', {
      }, ['menu__relativeBlock']);
    }
    
    this.singleImg = Block.create('span', {
    }, ['menu__img', 'menu__img_drill']);

    this.multiImg1 = Block.create('span', {
    }, ['menu__img', 'menu__img_drill-multi1']);

    this.multiImg2 = Block.create('span', {
    }, ['menu__img', 'menu__img_drill-multi2']);

    this.profileImg = Block.create('span', {
    }, ['menu__img', 'menu__img_profile']);

    this.ratingImg = Block.create('span', {
    }, ['menu__img', 'menu__img_rating']);

    this.logoutImg = Block.create('span', {
    }, ['menu__img', 'menu__img_logout']);

    this.single = Block.create('div', {
    }, ['menu__button'], 'Одиночная игра');

    this.multi = Block.create('div', {
    }, ['menu__button'], 'Игра по сети');

    this.profile = Block.create('div', {
    }, ['menu__button'], 'Профиль');

    this.rating = Block.create('div', {
    }, ['menu__button'], 'Рейтинг');

    this.logout = Block.create('div', {
    }, ['menu__button'], 'Выйти');

    this.render();

    this.addListener();
  }

  render() {
    this
      .append(this.relativeBlock[0]
        .append(this.single)
        .append(this.singleImg))
      .append(this.relativeBlock[1]
        .append(this.multi)
        .append(this.multiImg1)
        .append(this.multiImg2))
      .append(this.relativeBlock[2]
        .append(this.profile)
        .append(this.profileImg))
      .append(this.relativeBlock[3]
        .append(this.rating)
        .append(this.ratingImg))
      .append(this.relativeBlock[4]
        .append(this.logout)
        .append(this.logoutImg));
  }

  addListener() {
    const router = new Router();
    const userService = new UserService();

    this.single.on('click', () => {
      router.go('/singleplayer-online/');
    });
    this.multi.on('click', () => {
      router.go('/multiplayer/');
    });
    this.profile.on('click', () => {
      router.go('/profile/');
    });
    this.rating.on('click', () => {
      router.go('/rating/');
    });
    this.logout.on('click', () => {
      userService.logout();
      router.go('/login/');
    });
  }
}

export default PlayerMenuView;
