'use strict';

export default {
  path: '/v1/convert/xml',
  method: 'GET',
  config: {
    tags: ['api', 'v1']
  },
  handler: {
    async: async (request, reply) => {
      return reply({});
    }
  }
}