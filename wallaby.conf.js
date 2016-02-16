'use strict';

const Fs = require('fs');
const Path = require('path');

const babelConfiguration = JSON.parse(Fs.readFileSync(Path.join(__dirname, '.babelrc')));
babelConfiguration.babel = require('babel-core');

const GLOBS = {
  plugins: 'plugins/**/*.tests.js',
  tests: 'test/**/*.tests.js'
};

module.exports = (wallaby) => {
  return {

    files: [
      'lib/**/*',
      'test/**/*',
      'plugins/**/*',
      {pattern: GLOBS.tests, ignore: true},
      {pattern: GLOBS.plugins, ignore: true}
    ],

    tests: [GLOBS.tests, GLOBS.plugins],

    env: {
      type: 'node',
      params: {
        env: 'NODE_ENV=testing;'
      }
    },

    bootstrap: () => {
      require('./test/helper');
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel(babelConfiguration)
    }
  }
};
