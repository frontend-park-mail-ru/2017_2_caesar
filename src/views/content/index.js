import BaseView from 'Views/base/';
import Router from 'Modules/router';

class ContentView extends BaseView {
  constructor(header, content) {
    super('block', 'div');

    this.header = header;
    this.content = content;

    this.render();

    this.addListener();
  }

  render() {
    this
      .append(this.header)
      .append(this.content);
  }

  addListener() {
    const router = new Router();

    this.header.onBack(() => {
      router.go('/');
    });
  }
}

export default ContentView;
