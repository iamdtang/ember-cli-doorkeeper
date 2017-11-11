'use strict';

module.exports = function checkCoverageChange(oldCoverage, newCoverage, threshold) {
  let lineCoverageDiff = oldCoverage.lines - newCoverage.lines;
  let statementCoverageDiff = oldCoverage.statements - newCoverage.statements;
  let functionCoverageDiff = oldCoverage.functions - newCoverage.functions;
  let branchCoverageDiff = oldCoverage.branches - newCoverage.branches;
  let results = [];

  if (lineCoverageDiff > threshold) {
    results.push(`Line coverage dropped by ${lineCoverageDiff}%`);
  }

  if (statementCoverageDiff > threshold) {
    results.push(`Statement coverage dropped by ${statementCoverageDiff}%`);
  }

  if (functionCoverageDiff > threshold) {
    results.push(`Function coverage dropped by ${functionCoverageDiff}%`);
  }

  if (branchCoverageDiff > threshold) {
    results.push(`Branch coverage dropped by ${branchCoverageDiff}%`);
  }

  if (results.length === 0) {
    return true;
  }

  throw results;
}
