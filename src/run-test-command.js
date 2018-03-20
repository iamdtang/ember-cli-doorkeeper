'use strict';

const shell = require('shelljs');

module.exports = function runTestCommand(testCommand) {
  return shell.exec(testCommand);
}
