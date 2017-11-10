'use strict';

const checkCoverageChange = require('./check-coverage-change');
const { expect } = require('chai');

describe('checkCoverageChange', () => {
  it('should throw an error if line coverage dropped by more than the threshold', () => {
    let oldCoverage = {
      lines: 80
    };

    let newCoverage = {
      lines: 77
    };

    let threshold = 2;

    expect(() => {
      checkCoverageChange(oldCoverage, newCoverage, threshold);
    }).to.throw('Line coverage dropped by 3%');
  });

  it('should throw an error if statement coverage dropped by more than the threshold', () => {
    let oldCoverage = {
      statements: 80
    };

    let newCoverage = {
      statements: 77
    };

    let threshold = 2;

    expect(() => {
      checkCoverageChange(oldCoverage, newCoverage, threshold);
    }).to.throw('Statement coverage dropped by 3%');
  });

  it('should throw an error if function coverage dropped by more than the threshold', () => {
    let oldCoverage = {
      functions: 80
    };

    let newCoverage = {
      functions: 77
    };

    let threshold = 2;

    expect(() => {
      checkCoverageChange(oldCoverage, newCoverage, threshold);
    }).to.throw('Function coverage dropped by 3%');
  });

  it('should throw an error if branch coverage dropped by more than the threshold', () => {
    let oldCoverage = {
      branches: 80
    };

    let newCoverage = {
      branches: 77
    };

    let threshold = 2;

    expect(() => {
      checkCoverageChange(oldCoverage, newCoverage, threshold);
    }).to.throw('Branch coverage dropped by 3%');
  });
});
