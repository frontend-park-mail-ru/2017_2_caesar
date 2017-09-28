import Http from '../modules/http.js';

class UserService {
  signup(userData) {
    return Http.post('/api/auth/signup', userData);
  }

  login(userData) {
    return Http.post('/api/auth/login', userData);
  }

  logout() {
    return Http.get('/api/auth/logout');
  }

  loadUserData() {
    return Http.get('/api/auth/info');
  }

  loadUsersList() {
    return Http.get('/api/user/rating');
  }
}

export default UserService;
