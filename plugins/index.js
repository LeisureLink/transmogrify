'use strict';

import Hapi from 'hapi';

const server = new Hapi.Server({
  connections: {
    router: {
      stripTrailingSlash: true
    },
    routes: {
      cors: true
    }
  },
  load: {
    sampleInterval: 1000
  }
});

const port = process.env.PORT || 3000;
server.connection({ port });

server.register([
  require('blipp'),
  require('inert'),
  require('vision'),
  require('tv'),
  require('hapi-async-handler'),
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
      tags: {},
      info: {
        title: 'Transmogrify API',
        description: 'Transmogrify API',
        version: require('../package').version
      }
    }
  },
  {
    register: require('hapi-swaggered-ui'),
    options: {
      title: 'Transmogrify API',
      swaggerOptions: {
        docExpansion: 'list'
      }
    }
  },
  require('./applications'),
  require('./compound'),
  require('./registrations')
], (err) => {
  if (err) throw err;
  server.start(function () {
    console.log(`Server started at: ${server.info.uri}`);
  });
});

export default server;
//
//
//module.exports = {
//  connections: [{ port: process.env.PORT || 3000 }],
//  plugins: {
//    inert: {},
//    vision: {},
//    blipp: {},
//    'hapi-async-handler': {},
//    good: {
//      requestHeaders: true,
//      reporters: [
//        {
//          reporter: 'good-console',
//          events: { response: '*', log: '*', error: '*' }
//        }
//      ]
//    },
//    'hapi-router': { routes: '**/routes/*.js' },
//    'hapi-swaggered': {
//      info: { title: 'Transmogrify API', version: '0.0.1' }
//    },
//    'hapi-swaggered-ui': { title: 'Transmogrify API' },
//    './applications': {},
//    './compound': {},
//    './registrations': {}
//  }
//};
