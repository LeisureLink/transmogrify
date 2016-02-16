'use strict';

import Boom from 'boom';
import Joi from 'joi';
import Converter from '../converters/json';

export default {
  path: '/v1/convert/json',
  method: 'POST',
  config: {
    description: 'Convert JSON to XML',
    tags: ['api', 'v1']
  },
  handler: {
    async: async (request, reply) => {
      try {
        const result = Converter.convert(request.payload);
        return reply(result);
      } catch(e) {
        return reply(e);
      }
    }
  }
}
