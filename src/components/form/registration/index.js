import Block from 'Components/block/index';
import Form from 'Components/form/base/index';

const LENGTH_MIN_LOGIN = 8;
const LENGTH_MIN_PASSWORD = 8;

class RegistrationForm extends Form {
  constructor() {
    super('registration');

    this.email = Block.create('input', {
      type: 'email',
      name: 'email',
      placeholder: 'Почта',
      required: 'required',
    }, ['app-form-input', 'form-control']);

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

    this.passwordRepeat = Block.create('input', {
      type: 'password',
      name: 'passwordRepeat',
      placeholder: 'Повторите пароль',
      required: 'required',
    }, ['app-form-input', 'form-control']);

    this.submit = Block.create('input', {
      type: 'submit',
    }, ['btn', 'btn-default', 'app-form-button']);

    this.render();
    this.addListener();
  }

  onSubmit(callback) {
    this.on('submit', (event) => {
      event.preventDefault();

      const formData = this.checkFields();

      if (formData !== null) {
        callback(formData);
      } else {
        this.setErrorMessage('Пароли не совпадают!');
        this.password.addClasses(['error']);
        this.passwordRepeat.addClasses(['error']);
      }
    });
  }

  checkFields() {
    const fields = this.getFields(['email', 'username', 'password', 'passwordRepeat']);

    if (fields.password === fields.passwordRepeat) {
      return { email: fields.email, username: fields.username, password: fields.password };
    }

    return null;
  }

  render() {
    this.append(this.email);
    this.append(this.username);
    this.append(this.password);
    this.append(this.passwordRepeat);
    this.append(this.submit);
  }

  reset() {
    this.errorMessage.clear();
    this.errorMessage.hide();

    this.password.removeClasses(['error']);
    this.passwordRepeat.removeClasses(['error']);

    super.reset();
  }

  addListener() {
    const r = /^\w+@\w+\.\w{2,4}$/i;

    this.email.on('input', () => {
      console.log(!r.test(this.email.element.value))
      if (!r.test(this.email.element.value)) {
        this.setErrorMessage('Неверный формат email!');
        this.email.addClasses(['error']);
      } else {
        this.errorMessage.clear();
        this.errorMessage.hide();

        this.email.removeClasses(['error']);
      }
    });

    this.username.on('input', () => {
      if (this.username.element.value.length < LENGTH_MIN_LOGIN) {
        this.setErrorMessage(`Имя пользователя должно быть не менее ${LENGTH_MIN_LOGIN}`);
        this.username.addClasses(['error']);
      } else {
        this.errorMessage.clear();
        this.errorMessage.hide();

        this.username.removeClasses(['error']);
      }
    });

    this.password.on('input', () => {
      if (this.password.element.value.length < LENGTH_MIN_PASSWORD) {
        this.setErrorMessage(`Пароль должен быть не менее ${LENGTH_MIN_PASSWORD}`);
        this.password.addClasses(['error']);
      } else {
        this.errorMessage.clear();
        this.errorMessage.hide();

        this.password.removeClasses(['error']);
      }
    });

    this.passwordRepeat.on('input', () => {
      if (this.passwordRepeat.element.value !== this.password.element.value) {
        this.setErrorMessage('Пароли не совпадают!');
        this.passwordRepeat.addClasses(['error']);
      } else {
        this.errorMessage.clear();
        this.errorMessage.hide();

        this.passwordRepeat.removeClasses(['error']);
      }
    });
  }
}

export default RegistrationForm;
