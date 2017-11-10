'use strict';

const shell = require('shelljs');
const config = require('./../.doorkeeperrc');

module.exports = function runTests() {
  shell.exec(config.testCommand);
}
