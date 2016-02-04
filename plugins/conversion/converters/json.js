'use strict';

import JXON from 'jxon';
import _ from 'lodash';

export default {

  /**
   * Converts JSON -> XML
   *
   * @param {Object|Array} value
   * @param {Object} [options]
   * @param {String} [options.valueKey]
   * @param {String} [options.attrKey]
   * @param {String} [options.attrPrefix]
   * @param {Boolean} [options.lowerCaseTags]
   * @param {Boolean} [options.trueIsEmpty]
   * @param {Boolean} [options.autoDate]
   * @param {Boolean} [options.ignorePrefixedNodes]
   * @param {Boolean} [options.parseValues]
   */
  convert(value, options = {}) {
    options.valueKey = options.valueKey || 'value';
    options.attrPrefix = options.attrPrefix || '';
    options.trueIsEmpty = options.trueIsEmpty || false;

    validate(value);
    return JXON.jsToString(value);
  }
}

/**
 * Validate JSON
 * @param {Any} value
 */
const validate = (value) => {
  if (!value || !_.isArray(value) && !_.isObject(value)) {
    throw new Error('Value must be valid JSON');
  }

  if (_.keys(value).length === 0) {
    throw new Error('Object must have at least one key or item');
  }
};