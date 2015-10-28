'use strict';

let server = require('./api');

if (!module.parent) {
  server.start(function () {
    console.log("Server started", server.info.uri);
  });
}
