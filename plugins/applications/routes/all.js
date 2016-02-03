'use strict';

let Joi = require('joi');
let Promise = require('bluebird');

let Application = require('../schemas/application');

module.exports = {
  path: '/v1/applications',
  method: 'GET',
  config: {
    tags: ['api'],
    description: 'Get applications',

    response: {
      schema: Joi.array().items(Application)
    },

    handler: {
      async: Promise.coroutine(function* (request, reply) {
        try {
          return reply([]);
        } catch (e) {
          return reply(e);
        }
      })
    }
  }
};
