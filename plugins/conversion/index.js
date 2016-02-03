'use strict';

/**
 * Conversion Plugin
 *
 * Takes care of converting xml <-> json
 *
 * @param {Hapi.Server} server
 * @param {Object} options
 * @param {Function} next
 */
const plugin = (server, options, next) => {
  console.log('conversion loaded');
  next();
};

plugin.attributes = { pkg: require('./package') };

export default plugin;
