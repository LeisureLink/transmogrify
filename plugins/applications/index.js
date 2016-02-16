'use strict';

/**
 * This is a plugin
 * @param server
 * @param options
 * @param next
 * @returns {*}
 */
const plugin = (server, options, next) => {

  return next();
};

plugin.attributes = require('./package');

module.exports = plugin;
