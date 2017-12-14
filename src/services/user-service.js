import Http from 'Modules/http.js';

/**
 * Сервис для работы с API
 * @module UserService
 */

class UserService {
  constructor() {
    if (UserService.instance) {
      return UserService.instance;
    }

    this.loginned = false;

    UserService.instance = this;
  }

  /**
   * Регистрация нового пользователя
   * @param {*} userData - данные пользователя
   * @return {Promise}
   */

  signup(userData) {
    return Http.post('/api/auth/signup', userData).then((answer) => {
      this.loginned = true;

      return answer;
    });
  }

  /**
   * Авторзация пользователя
   * @param {*} userData - данные пользователя
   * @return {Promise}
   */

  login(userData) {
    return Http.post('/api/auth/login', userData)
      .then((answer) => {
        this.loginned = true;

        return answer;
      });
  }

  /**
   * Проверка авторизации
   * @return {Promise}
   */

  check() {
    return Http.get('/api//auth/check')
      .then((answer) => {
        this.loginned = answer.status === 'authorized';

        return answer;
      });
  }

  /**
   * Выход из системы
   * @return {Promise}
   */

  logout() {
    this.loginned = false;

    return Http.get('/api/auth/logout');
  }

  /**
   * Загрузка данных пользователя
   * @return {Promise}
   */

  loadUserData() {
    return Http.get('/api/auth/me');
  }

  /**
   * Загрузка списка пользователей
   * @return {Promise}
   */

  loadUsersList() {
    return Http.get('/api/user/rating');
  }

  /**
   * Проверка авторизации
   * @return {boolean}
   */

  isLoginned() {
    return this.loginned;
  }
}

export default UserService;
