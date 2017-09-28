import Http from '../modules/http.js';

/**
 * Сервис для работы с API
 * @module UserService
 */

class UserService {
  constructor() {
    this.user = null;
    this.users = [];
  }

  /**
   * Проверка, авторизован ли пользователь
   * @return {boolean}
   */

  isLoggedIn() {
    return !!this.user;
  }

  /**
   * Регистрация нового пользователя
   * @param {*} userData - данные пользователя
   * @return {Promise}
   */

  signup(userData) {
    return Http.post('/api/auth/signup', userData);
  }

  /**
   * Авторзация пользователя
   * @param {*} userData - данные пользователя
   * @return {Promise}
   */

  login(userData) {
    return Http.post('/api/auth/login', userData);
  }

  /**
   * Выход из системы
   * @return {Promise}
   */

  logout() {
    return Http.get('/api/auth/logout');
  }

  /**
   * Загрузка данных пользователя
   * @return {Promise}
   */

  loadUserData() {
    if (this.isLoggedIn() ) {
      return Promise.resolve(this.user);
    }

    return Http.get('/api/auth/info')
      .then(function (userData) {
        this.user = userData;
        return userData;
      }.bind(this));
  }

  /**
   * Загрузка списка пользователей
   * @return {Promise}
   */

  loadUsersList() {
    return Http.get('/api/user/rating')
      .then(function (usersList) {
        this.users = usersList;
        return usersList;
      }.bind(this));
  }
}

export default UserService;
