const fs = require('fs');

module.exports = function getCoverage() {
  let contents = fs.readFileSync('./coverage/coverage-summary.json', {
    encoding: 'utf8'
  });
  let json = JSON.parse(contents);
  return {
    lines: json.total.lines.pct,
    statements: json.total.statements.pct,
    functions: json.total.functions.pct,
    branches: json.total.branches.pct
  };
}
