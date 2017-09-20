import RegistrationForm from '../components/registrationForm';
import Block from '../components/block';

class RegistrationView extends Block {
  constructor(callback) {
    super('div', {}, ['block', 'registration-block']);

    this.header = new Block('h2', {}, ['app-form-header']);
    this.header.get().innerHTML = 'Регистрация';

    this.form = new RegistrationForm();
    this.form.onSubmit(callback);

    this.render();
  }

  render() {
    this.get().appendChild(this.header.get());
    this.get().appendChild(this.form.get());
  }
}

export default RegistrationView;
