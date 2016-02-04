'use strict';

import VM from 'vm';

const babel = require('babel-core');

const transpile = (code) => {
  return babel.transform(`(sources) => { ${code} };`, {
    presets: ['es2016-node5'],
    plugins: ['add-module-exports']
  });
};


export default {

  /**
   * Executes the javascript
   */
  async execute(code, ...sources) {
    const context = VM.createContext({
      '_': require('lodash'),
      trans: require('trans'),
      prop: require('dot-prop'),
      JSON: {
        parse: require('parse-json'),
        stringify: require('stringify-object')
      }
    });

    const transpiledCode = transpile(code).code;
    const fn = VM.runInContext(transpiledCode, context);
    return await fn(sources);
  }
}