const express = require('express');

class Server {
  constructor() {
    this.app = express();
    this.app.get('/', (request, response) => response.send('<title>Hello</title>'));
  }

  start(port = 8080) {
    return new Promise((resolve, reject) => {
      if (this.server) {
        reject(new Error('Server is already running.'));
      } else {
        this.server = this.app.listen(port, () => resolve(port));
      }
    });
  }

  stop() {
    if (this.server) {
      this.server.close();
      this.server = undefined;
    }
  }
}

module.exports = Server;
