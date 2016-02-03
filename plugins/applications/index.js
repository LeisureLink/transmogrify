'use strict';



let plugin = (server, options, next) => {

  //server.route([
  //  {
  //    path: '/v1/applications',
  //    method: 'GET',
  //    config: {
  //      tags: ['api'],
  //      description: 'Get applications',
  //
  //      response: {
  //        schema: Joi.array()
  //      },
  //
  //      handler: {
  //        async: Promise.coroutine(function* (request, reply) {
  //          try {
  //            return reply([]);
  //          } catch (e) {
  //            return reply(e);
  //          }
  //        })
  //      }
  //    }
  //  },
  //
  //  {
  //    path: '/v1/applications/{id}',
  //    method: 'GET',
  //    config: {
  //      tags: ['api'],
  //      description: 'Get registrations',
  //
  //      handler: {
  //        async: Promise.coroutine(function* (request, reply) {
  //          try {
  //            return reply({});
  //          } catch (e) {
  //            return reply(e);
  //          }
  //        })
  //      }
  //    }
  //  },
  //
  //  {
  //    path: '/v1/applications',
  //    method: 'POST',
  //    config: {
  //      tags: ['api'],
  //      description: 'Create an application',
  //
  //      handler: {
  //        async: Promise.coroutine(function* (request, reply) {
  //          try {
  //            return reply({});
  //          } catch (e) {
  //            return reply(e);
  //          }
  //        })
  //      }
  //    }
  //  },
  //
  //  {
  //    path: '/v1/applications/{id}',
  //    method: 'PUT',
  //    config: {
  //      tags: ['api'],
  //      description: 'Update an application',
  //
  //      handler: {
  //        async: Promise.coroutine(function* (request, reply) {
  //          try {
  //            return reply({});
  //          } catch (e) {
  //            return reply(e);
  //          }
  //        })
  //      }
  //    }
  //  },
  //
  //  {
  //    path: '/v1/applications/{id}',
  //    method: 'DELETE',
  //    config: {
  //      tags: ['api'],
  //      description: 'Delete an application',
  //
  //      handler: {
  //        async: Promise.coroutine(function* (request, reply) {
  //          try {
  //            return reply({});
  //          } catch (e) {
  //            return reply(e);
  //          }
  //        })
  //      }
  //    }
  //  }
  //
  //]);

  next();
};

plugin.attributes = require('./package');

module.exports = plugin;
