'use strict';

module.exports = function displayCoverage(coverage, title) {
  console.log('');
  console.log(title);
  console.log('================');
  console.log(`Lines: ${coverage.lines}`);
  console.log(`Statements: ${coverage.statements}`);
  console.log(`Functions: ${coverage.functions}`);
  console.log(`Branches: ${coverage.branches}`);
  console.log('');
}
