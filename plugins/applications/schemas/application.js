'use strict';

import Joi from 'joi';

export default {
  name: Joi.string().required().min(2).trim().description(`Application's name`)
};
