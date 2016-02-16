'use strict';

import Boom from 'boom';
import Joi from 'joi';
import _ from 'lodash';
import VM from '../services/vm';

export default {
  path: '/v1/reduce/run',
  method: 'path',
  config: {
    description: 'Run map reduce',
    tags: ['api', 'v1'],

    validate: {
      payload: Joi.object({
        sources: Joi.array().items(Joi.object()),
        func: Joi.string().required()
      })
    }

  },
  handler: {
    async: async (request, reply) => {
      return reply({});
    }
  }
}
