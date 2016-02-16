'use strict';

import Joi from 'joi';
import Boom from 'boom';
import Application from '../schemas/application';


module.exports = {
  path: '/v1/applications',
  method: 'GET',
  config: {
    tags: ['api'],
    description: 'Get applications',

    response: {
      schema: Joi.array().items(Joi.object(Application))
    },

    handler: {
      async: async (request, reply) => {
        try {
          return reply([]);
        } catch (e) {
          return reply(e);
        }
      }
    }
  }
};
