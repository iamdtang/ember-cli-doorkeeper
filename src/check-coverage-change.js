module.exports = function checkCoverageChange(oldCoverage, newCoverage, threshold) {
  let lineCoverageDiff = oldCoverage.lines - newCoverage.lines;
  let statementCoverageDiff = oldCoverage.statements - newCoverage.statements;
  let functionCoverageDiff = oldCoverage.functions - newCoverage.functions;
  let branchCoverageDiff = oldCoverage.branches - newCoverage.branches;

  if (lineCoverageDiff > threshold) {
    throw new Error(`Line coverage dropped by ${lineCoverageDiff}%`);
  }

  if (statementCoverageDiff > threshold) {
    throw new Error(`Statement coverage dropped by ${statementCoverageDiff}%`);
  }

  if (functionCoverageDiff > threshold) {
    throw new Error(`Function coverage dropped by ${functionCoverageDiff}%`);
  }

  if (branchCoverageDiff > threshold) {
    throw new Error(`Branch coverage dropped by ${branchCoverageDiff}%`);
  }
}
