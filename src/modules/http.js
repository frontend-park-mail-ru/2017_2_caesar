class Http {
  static get(address, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', address, true);
    xhr.withCredentials = true;

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (+xhr.status >= 400) {
        return callback(xhr, null);
      }

      const response = JSON.parse(xhr.responseText);
      callback(null, response);
    };

    xhr.send();
  }

  static post(address, body, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', address, true);
    xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (+xhr.status >= 400) {
        return callback(xhr, null);
      }

      const response = JSON.parse(xhr.responseText);
      callback(null, response);
    };

    xhr.send(JSON.stringify(body));
  }
}

export default Http;
