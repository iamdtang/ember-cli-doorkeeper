'use strict';

const shell = require('shelljs');
const config = require('./../.doorkeeperrc');

module.exports = function runTests() {
  console.log('Running tests ...');
  shell.exec(config.testCommand);
}
