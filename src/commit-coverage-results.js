'use strict';

const shell = require('shelljs');

module.exports = function commitCoverageResults() {
  shell.exec('git add coverage/coverage-summary.json');
  shell.exec('git commit -m "Auto commit coverage/coverage-summary.json"');
  shell.exec('git config --global push.default current');
  shell.exec('git push');
}
