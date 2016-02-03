'use strict';

let mongojs = require('mongojs');
let uri = process.env.TRANSMOGRIFY_MONGO_URI || 'mongodb://docker.dev/transmogrify-dev';

module.exports = mongojs(uri);
