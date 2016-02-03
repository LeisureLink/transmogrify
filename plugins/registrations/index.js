'use strict';

let Joi = require('joi');
let Promise = require('bluebird');

let plugin = (server, options, next) => {
  server.route([
    {
      path: '/v1/registrations',
      method: 'GET',
      config: {
        tags: ['api'],
        description: 'Get registrations',

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
    }
    //{
    //  path: '/v1/registrations',
    //  method: 'POST',
    //  config: {
    //    validate: {
    //      payload: Joi.object().keys({
    //        name: Joi.string().required().min(2).max(128).description('Registration Name')
    //      })
    //    }
    //  },
    //  handler: (req, reply) => {
    //    return reply(req.payload);
    //  }
    //},
    //{
    //  path: '/v1/registrations/{id}',
    //  method: 'GET',
    //  handler: (req, reply) => {
    //    return reply({});
    //  }
    //},
    //{
    //  path: '/v1/registrations/{id}',
    //  method: 'PUT',
    //  handler: (req, reply) => {
    //    return reply({});
    //  }
    //},
    //{
    //  path: '/v1/registrations/{id}',
    //  method: 'DELETE',
    //  handler: (req, reply) => {
    //    return reply({});
    //  }
    //}
  ]);

  next();
};

plugin.attributes = require('./package');

module.exports = plugin;
