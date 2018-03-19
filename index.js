/* eslint-env node */
'use strict';

const getCoverage = require('./src/get-coverage');
const displayCoverage = require('./src/display-coverage');
const runTestCommand = require('./src/run-test-command');
const checkCoverageChange = require('./src/check-coverage-change');

module.exports = {
  name: 'ember-cli-doorkeeper',
  includedCommands() {
    return {
      doorkeeper: {
        name: 'doorkeeper',
        description: 'Run tests and fail if coverage drops',
        run() {
          let config = require(`${this.project.root}/.doorkeeperrc`);
          this.ui.writeLine('Running tests ...');
          this.ui.writeLine(config.testCommand);
          let resp = runTestCommand(config.testCommand);
          if (resp.code !== 0) {
            this.ui.writeLine("We'll run code coverage when your tests pass.");
            process.exit(1);
            return;
          }

          let oldCoverage = getCoverage(config.mainBranch);

          if (!oldCoverage) {
            this.ui.writeLine('No previous coverage to compare against');
            return;
          }

          let newCoverage = getCoverage();
          displayCoverage(this.ui, oldCoverage, 'Old Coverage');
          displayCoverage(this.ui, newCoverage, 'New Coverage');
          try {
            checkCoverageChange(oldCoverage, newCoverage, config.threshold);
            this.ui.writeLine(config.passMessage || 'Awesome! Keep up the testing!');
          } catch(errors) {
            errors.forEach((error) => {
              this.ui.writeLine(error);
            });
            this.ui.writeLine(config.failMessage || 'Write more tests please.');
            process.exit(1);
          }
        }
      }
    };
  }
};
