import Block from '../block/index';
import Form from '../form/index';

class LoginForm extends Form {
  constructor() {
    super('login', ['app-form']);

    this.username = Block.create('input', {
      type: 'text',
      name: 'username',
      placeholder: 'Имя пользователя',
      required: 'required',
    }, ['app-form-input', 'form-control']);

    this.password = Block.create('input', {
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      required: 'required',
    }, ['app-form-input', 'form-control']);

    this.submit = Block.create('input', {
      type: 'submit',
    }, ['btn', 'btn-default', 'app-form-button']);

    this.render();
  }

  onSubmit(callback) {
    this.on('submit', (event) => {
      event.preventDefault();

      const formData = this.getFields(['username', 'password']);

      if (formData) {
        callback(formData);
      }
    });
  }

  render() {
    this.append(this.username);
    this.append(this.password);
    this.append(this.submit);
  }
}

export default LoginForm;
