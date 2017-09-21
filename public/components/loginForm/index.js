import Block from '../block';
import Form from '../form';

class LoginForm extends Form {
  constructor() {
    super('login', ['app-form']);

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

    this.submit = new Block('input', {
      type: 'submit',
    }, ['btn', 'btn-default', 'app-form-button']);

    this.render();
  }

  render() {
    this.append(this.username);
    this.append(this.password);
    this.append(this.submit);
  }
}

export default LoginForm;
