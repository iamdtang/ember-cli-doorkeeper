/* eslint-env node */
'use strict';

const getCoverage = require('./src/get-coverage');
const displayCoverage = require('./src/display-coverage');
const runTests = require('./src/run-tests');
const checkCoverageChange = require('./src/check-coverage-change');
const config = require('./.doormanrc');

module.exports = {
  name: 'ember-cli-doorman',
  includedCommands() {
    return {
      doorman: {
        name: 'doorman',
        description: 'Run tests and fail if coverage drops',
        run() {
          let oldCoverage = getCoverage();
          runTests();
          let newCoverage = getCoverage();
          displayCoverage(oldCoverage, 'Old Coverage');
          displayCoverage(newCoverage, 'New Coverage');
          try {
            checkCoverageChange(oldCoverage, newCoverage, config.threshold);
            console.log('Awesome! Keep up the testing.');
          } catch(error) {
            console.error(error.message);
            process.exit(1);
          }
        }
      }
    };
  }
};
