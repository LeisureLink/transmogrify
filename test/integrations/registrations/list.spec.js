'use strict';

const server = require('../../../api');

describe('[GET]: /v1/registrations', () => {

  it('should return an array', (done) => {
    server.inject({ method: 'GET', url: '/v1/registrations' }, (res) => {
      expect(res.result).to.be.an('array');
      done();
    })
  });

});
