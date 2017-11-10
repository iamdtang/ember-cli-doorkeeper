module.exports = function displayCoverage(coverage) {
  console.log('');
  console.log('Current Coverage');
  console.log('================');
  console.log(`Lines: ${coverage.lines}`);
  console.log(`Statements: ${coverage.statements}`);
  console.log(`Functions: ${coverage.functions}`);
  console.log(`Branches: ${coverage.branches}`);
  console.log('');
}
