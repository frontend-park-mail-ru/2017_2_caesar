/**
 * Модуль, предоставляющий методы для выполнения HTTP-запросов
 * @module Http
 */

class Http {
  /**
   * Выполняет GET запрос по указанному адресу
   * @param {string} address - адрес запроса
   * @return {Promise}
   */

  static get(address) {
    const url = `https://tp-2017-2-caesar-server.herokuapp.com${address}`;

    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    })
      .then((response) => {
        if (response.status >= 400) {
          throw response;
        }

        return response.json();
      });
  }

  /**
   * Выполняет POST запрос по указанному адресу
   * @param {string} address - адрес запроса
   * @param {*} body - тело запроса
   * @return {Promise}
   */

  static post(address, body) {
    const url = `https://tp-2017-2-caesar-server.herokuapp.com${address}`;

    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then((response) => {
        if (response.status >= 400) {
          throw response;
        }

        return response.json();
      });
  }
}

export default Http;