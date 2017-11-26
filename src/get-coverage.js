'use strict';

const fs = require('fs');
const shell = require('shelljs');

module.exports = function getCoverage(branch) {
  let pathToCoverageSummary = './coverage/coverage-summary.json';
  let contents;

  if (branch) {
    contents = shell.exec(`git show ${branch}:${pathToCoverageSummary}`);
  } else {
    contents = fs.readFileSync(pathToCoverageSummary, {
      encoding: 'utf8'
    });
  }

  let json = JSON.parse(contents);
  return {
    lines: json.total.lines.pct,
    statements: json.total.statements.pct,
    functions: json.total.functions.pct,
    branches: json.total.branches.pct
  };
}
