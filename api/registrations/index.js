'use strict';
let Joi = require('joi');

let plugin = (server, options, next) => {

  server.route([
    {
      path: '/v1/registrations',
      method: 'GET',
      handler: (req, reply) => {
        return reply([]);
      }
    },
    {
      path: '/v1/registrations',
      method: 'POST',
      config: {
        validate: {
          payload: Joi.object().keys({
            name: Joi.string().required().min(2).max(128).description('Registration Name')
          })
        }
      },
      handler: (req, reply) => {
        return reply({});
      }
    },
    {
      path: '/v1/registrations/{id}',
      method: 'GET',
      handler: (req, reply) => {
        return reply({});
      }
    },
    {
      path: '/v1/registrations/{id}',
      method: 'PUT',
      handler: (req, reply) => {
        return reply({});
      }
    },
    {
      path: '/v1/registrations/{id}',
      method: 'DELETE',
      handler: (req, reply) => {
        return reply({});
      }
    }
  ]);

  next();
};

plugin.attributes = require('./package.json');

module.exports = plugin;
