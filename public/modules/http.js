class Http {
  static Get(address, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:8081${address}`, true);
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

  static Post(address, body, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `http://localhost:8081${address}`, true);
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
