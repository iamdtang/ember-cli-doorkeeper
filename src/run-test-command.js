'use strict';

const shell = require('shelljs');

module.exports = function runTestCommand(testCommand) {
  shell.exec(testCommand);
}
