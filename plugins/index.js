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
    register: require('hapi-router'),
    options: {
      routes: 'plugins/**/routes/**/*'
    }
  },
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
  require('./registrations'),
  require('./conversion'),
  require('./reduce'),
], (err) => {
  if (err) throw err;

  server.start(() => {
    console.log(`Server started at: ${server.info.uri}`);
  });

});

export default server;
