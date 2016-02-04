'use strict';

/**
 * MapReduce Plugin
 *
 * Takes care of map reducing data
 *
 * @param {Hapi.Server} server
 * @param {Object} options
 * @param {Function} next
 */
const plugin = (server, options, next) => {
  console.log('MR loaded');
  next();
};

plugin.attributes = { pkg: require('./package') };

export default plugin;
