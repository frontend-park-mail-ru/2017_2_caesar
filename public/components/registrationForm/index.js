import Block from '../block';
import Form from '../form';

class RegistrationForm extends Form {
  constructor() {
    super('registration', ['app-form']);

    this.email = new Block('input', {
      type: 'email',
      name: 'email',
      placeholder: 'Почта',
      required: 'required',
    }, ['app-form-input', 'form-control']);

    this.username = new Block('input', {
      type: 'text',
      name: 'username',
      placeholder: 'Имя пользователя',
      required: 'required',
    }, ['app-form-input', 'form-control']);

    this.password = new Block('input', {
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      required: 'required',
    }, ['app-form-input', 'form-control']);

    this.passwordRepeat = new Block('input', {
      type: 'password',
      name: 'passwordRepeat',
      placeholder: 'Повторите пароль',
      required: 'required',
    }, ['app-form-input', 'form-control']);

    this.submit = new Block('input', {
      type: 'submit',
    }, ['btn', 'btn-default', 'app-form-button']);

    this.render();
  }

  render() {
    this.append(this.email);
    this.append(this.username);
    this.append(this.password);
    this.append(this.passwordRepeat);
    this.append(this.submit);
  }
}

export default RegistrationForm;
