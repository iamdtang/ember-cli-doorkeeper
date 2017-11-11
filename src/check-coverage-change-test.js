'use strict';

const checkCoverageChange = require('./check-coverage-change');
const { expect } = require('chai');

describe('checkCoverageChange', () => {
  it('should throw an error for all coverage types if they all drop by more than the threshold', () => {
    let oldCoverage = {
      lines: 80,
      statements: 90,
      functions: 70,
      branches: 65
    };

    let newCoverage = {
      lines: 77,
      statements: 84,
      functions: 66,
      branches: 62
    };

    let threshold = 2;

    try {
      checkCoverageChange(oldCoverage, newCoverage, threshold);
    } catch(error) {
      expect(error).to.deep.equal([
        'Line coverage dropped by 3%',
        'Statement coverage dropped by 6%',
        'Function coverage dropped by 4%',
        'Branch coverage dropped by 3%'
      ]);
    }
  });

  it('should only throw an error with the coverage types that dropped more than the threshold', () => {
    let oldCoverage = {
      lines: 80,
      statements: 90,
      functions: 70,
      branches: 65
    };

    let newCoverage = {
      lines: 80,
      statements: 84,
      functions: 66,
      branches: 65
    };

    let threshold = 2;

    try {
      checkCoverageChange(oldCoverage, newCoverage, threshold);
    } catch(error) {
      expect(error).to.deep.equal([
        'Statement coverage dropped by 6%',
        'Function coverage dropped by 4%'
      ]);
    }
  });

  it('should not throw if none of the coverage types dropped more than the threshold', () => {
    let oldCoverage = {
      lines: 80,
      statements: 90,
      functions: 70,
      branches: 65
    };

    let newCoverage = {
      lines: 80,
      statements: 88,
      functions: 69,
      branches: 64
    };

    let threshold = 2;

    let result = checkCoverageChange(oldCoverage, newCoverage, threshold);
    expect(result).to.equal(true);
  });
});
