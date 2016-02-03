'use strict';

let Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().required().min(2).trim().description(`Application's name`)
});
