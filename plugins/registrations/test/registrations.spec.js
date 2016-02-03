'use strict';

import Hapi from 'hapi';

import Async from 'hapi-async-handler';
import Plugin from '../';


describe('Registrations Plugin', () => {

  let server;
  before(done => {
    server = new Hapi.Server();
    server.connection({ port: 1337 });
    server.register([Async, Plugin], (err) => {
      if (err) return done(err);
      done();
    });
  });

  describe('[GET] /v1/registrations', () => {

    it('gets all the registrations', (done) => {

      done();
    });
  });

});
