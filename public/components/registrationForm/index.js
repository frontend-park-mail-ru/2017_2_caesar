import Block from '../block';
import Form from '../form';

class RegistrationForm extends Form {
  constructor() {
    super('login', ['app-form']);

    this.email = new Block('input', {
      type: 'email',
      name: 'email',
      placeholder: 'Почта',
      //required: 'required',
    }, ['app-form-input', 'form-control']);

    this.username = new Block('input', {
      type: 'text',
      name: 'username',
      placeholder: 'Имя пользователя',
      //required: 'required',
    }, ['app-form-input', 'form-control']);

    this.password = new Block('input', {
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      //required: 'required',
    }, ['app-form-input', 'form-control']);

    this.passwordRepeat = new Block('input', {
      type: 'password',
      name: 'passwordRepeat',
      placeholder: 'Повторите пароль',
      //required: 'required',
    }, ['app-form-input', 'form-control']);

    this.submit = new Block('input', {
      type: 'submit',
    }, ['btn', 'btn-default']);

    this.render();
  }

  render() {
    this.get().appendChild(this.email.get());
    this.get().appendChild(this.username.get());
    this.get().appendChild(this.password.get());
    this.get().appendChild(this.passwordRepeat.get());
    this.get().appendChild(this.submit.get());
  }
}

export default RegistrationForm;
