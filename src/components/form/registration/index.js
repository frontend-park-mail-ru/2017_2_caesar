import Block from 'Components/block/index';
import Form from 'Components/form/base/index';

const LENGTH_MIN_LOGIN = 8;
const LENGTH_MIN_PASSWORD = 8;

class RegistrationForm extends Form {
  constructor() {
    super('registration');

    this.email = Block.create('input', {
      type: 'text',
      name: 'email',
      placeholder: 'Почта',
    }, ['form__input', 'form-control']);

    this.username = Block.create('input', {
      type: 'text',
      name: 'username',
      placeholder: 'Имя пользователя',
    }, ['form__input', 'form-control']);

    this.password = Block.create('input', {
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
    }, ['form__input', 'form-control']);

    this.passwordRepeat = Block.create('input', {
      type: 'password',
      name: 'passwordRepeat',
      placeholder: 'Повторите пароль',
    }, ['form__input', 'form-control']);

    this.submit = Block.create('input', {
      type: 'submit',
    }, ['form__button', 'form__button_send']);

    this.render();
    this.addListener();
  }

  onSubmit(callback) {
    this.on('submit', (event) => {
      event.preventDefault();

      const formData = this.checkFields();

      console.log(formData);

      if (formData.error === null) {
        delete formData.error;
        callback(formData);
      } else {
        this.setErrorMessage('Неправильно заполнена форма!');
      }
    });
  }

  checkFields() {
    const fields = this.getFields(['email', 'username', 'password', 'passwordRepeat']);

    const checkEmail = /^\w+@\w+\.\w*\.?\w{2,4}$/i;

    let error = [];

    if (!checkEmail.test(fields.email)) {
      error.push('EMAIL');
    }

    if (fields.username < LENGTH_MIN_LOGIN) {
      error.push('USERNAME');
    }

    if (fields.password < LENGTH_MIN_PASSWORD) {
      error.push('PASSWORD');
    }

    if (fields.password !== fields.passwordRepeat) {
      error.push('REPEAT_PASSWORD');
    }

    if (!error.length) {
      error = null;
    }

    return Object.assign({}, { error },
      { email: fields.email, username: fields.username, password: fields.password });
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

    this.email.removeClasses(['error']);
    this.username.removeClasses(['error']);
    this.password.removeClasses(['error']);
    this.passwordRepeat.removeClasses(['error']);

    super.reset();
  }

  addListener() {
    const r = /^\w+@\w+\.\w*\.?\w{2,4}$/i;

    this.email.on('input', () => {
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
