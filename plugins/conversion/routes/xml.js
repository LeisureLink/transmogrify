'use strict';

import Boom from 'boom';
import Joi from 'joi';
import Converter from '../converters/xml';
import _ from 'lodash';

export default {
  path: '/v1/convert/xml',
  method: 'POST',
  config: {
    description: 'Convert XML to JSON',
    tags: ['api', 'v1'],

    payload: {
      parse: false,
      allow: ['application/xml', 'text/xml'],
      defaultContentType: 'application/xml'
    }
  },
  handler: {
    async: async (request, reply) => {
      try {
        const xml = request.payload.toString();
        const result = Converter.convert(xml);
        return reply(result);
      } catch (e) {
        return reply(e);
      }
    }
  }
}
