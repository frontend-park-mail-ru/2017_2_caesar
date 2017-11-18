/**
 * Модуль, предоставляющий методы для выполнения HTTP-запросов
 * @module Http
 */

const baseUrl = 'ws://localhost:8081';

class Http {
  /**
   * Выполняет GET запрос по указанному адресу
   * @param {string} address - адрес запроса
   * @return {Promise}
   */

  static get(address) {
    const url = baseUrl + address;

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
    const url = baseUrl + address;

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
