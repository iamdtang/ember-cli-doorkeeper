'use strict';

module.exports = function displayCoverage(coverage, title) {
  this.ui.writeLine('');
  this.ui.writeLine(title);
  this.ui.writeLine('================');
  this.ui.writeLine(`Lines: ${coverage.lines}%`);
  this.ui.writeLine(`Statements: ${coverage.statements}%`);
  this.ui.writeLine(`Functions: ${coverage.functions}%`);
  this.ui.writeLine(`Branches: ${coverage.branches}%`);
  this.ui.writeLine('');
}
