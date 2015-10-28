'use strict';

const Hapi = require('hapi');

let server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000 });


server.register([
  require('inert'),
  require('vision'),
  require('blipp'),
  require('./registrations'),
  {
    register: require('good'),
    options: {
      requestHeaders: true,
      reporters: [
        {
          reporter: 'good-console',
          events: { response: '*', log: '*', error: '*' }
        }
      ]
    }
  },
  {
    register: require('hapi-swaggered'),
    options: {
      info: {
        title: 'Transmogrify',
        version: '1.0.0'
      }
    }
  },
  {
    register: require('hapi-swaggered-ui'),
    options: {
      title: 'Transmogrify API',
      path: '/docs'
    }
  }
], (err) => {
  if (err) throw err;
});

module.exports = server;
