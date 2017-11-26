'use strict';

module.exports = function displayCoverage(ui, coverage, title) {
  ui.writeLine('');
  ui.writeLine(title);
  ui.writeLine('================');
  ui.writeLine(`Lines: ${coverage.lines}%`);
  ui.writeLine(`Statements: ${coverage.statements}%`);
  ui.writeLine(`Functions: ${coverage.functions}%`);
  ui.writeLine(`Branches: ${coverage.branches}%`);
  ui.writeLine('');
}
