class Http {
  static get(address) {
    const url = `http://localhost:8081${address}`;
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

  static post(address, body) {
    const url = `http://localhost:8081${address}`;
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
