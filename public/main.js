import RegistrationForm from './components/registrationForm';
import Http from './modules/http.js';

const registration = new RegistrationForm();
registration.onSubmit(body => Http.Post('/reg', { email: 'ab@mail.ru', username: 'ab', password: '1830' }, (err, res) => {
  if (err) {
    console.log(+err.status);
  }
  console.log(res);
}));

document.body.appendChild(registration.get());
