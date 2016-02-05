'use strict';

import JXON from 'jxon';

export default {

  /**
   * Converts the XML -> JSON
   *
   * @param {String} xml
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
  convert(xml, options = {}) {
    options.valueKey = options.valueKey || 'value';
    options.attrPrefix = options.attrPrefix || '';
    options.trueIsEmpty = options.trueIsEmpty || false;

    if (!xml || xml.toString().length === 0) {
      throw new Error('XML is a required parameter');
    }

    JXON.config(options);
    return JXON.stringToJs(xml);
  }
}