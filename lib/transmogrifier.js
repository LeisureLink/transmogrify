'use strict';

let Assert = require('assert-plus');

/**
 * Transmogrifier
 *
 * @public
 * @class
 */
class Transmogrifier {

  /**
   * Translates the source object into a new object
   *
   * @example
   * Transmogrifier.transmogrify({ firstName: 'Bob', lastName: 'Sagot' }, { firstName: 'firstName', lastName: 'lastName', fullName: 'firstName' + 'lastName' })
   *
   * @param {Object|Array} source
   * @param {Object} spec
   * @param {Object} [options]
   * @returns {Promise<Object|Array>}
   */
  static transmogrify(source, spec, options) {
    options = options || {};

    return new Promise((resolve) => {
      Assert.optionalObject(source, 'source');
      Assert.object(spec, 'spec');

      return resolve({});
    });
  }
}

module.exports = Transmogrifier;
