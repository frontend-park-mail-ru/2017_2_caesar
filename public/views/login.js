import LoginForm from '../components/loginForm';
import Block from '../components/block';

class LoginView extends Block {
  constructor(callback) {
    super('div', {}, ['block', 'registration-block']);

    this.header = new Block('h2', {}, ['app-form-header']);
    this.header.get().innerHTML = 'Авторизация';

    this.form = new LoginForm();
    this.form.onSubmit(callback);

    this.render();
  }

  render() {
    this.get().appendChild(this.header.get());
    this.get().appendChild(this.form.get());
  }
}

export default LoginView;
