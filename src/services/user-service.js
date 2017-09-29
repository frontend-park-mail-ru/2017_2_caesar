import Http from 'Modules/http.js';

/**
 * Сервис для работы с API
 * @module UserService
 */

class UserService {
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
    return Http.get('/api/auth/info');
  }

  /**
   * Загрузка списка пользователей
   * @return {Promise}
   */

  loadUsersList() {
    return Http.get('/api/user/rating');
  }
}

export default UserService;
