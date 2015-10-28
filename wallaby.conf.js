'use strict';

module.exports = function () {
  return {
    files: [
      'api/**/*',
      'lib/**/*',
      'test/**/*',
      { pattern: 'test/**/*.spec.js', ignore: true }
    ],
    tests: [
      'test/**/*.spec.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    bootstrap: function () {
      require('./test/helper')
    }
  }
};
