[![Build Status](https://travis-ci.org/skaterdav85/ember-cli-doorkeeper.svg?branch=master)](https://travis-ci.org/skaterdav85/ember-cli-doorkeeper)

# ember-cli-doorkeeper

This Ember CLI addon will fail a test suite for an Ember app or addon if code coverage drops by a specified threshold. This addon is meant to be used with [`ember-cli-code-coverage`](https://github.com/kategengler/ember-cli-code-coverage).

## Installation and Configuration

1. `ember install ember-cli-doorkeeper`
2. Update your `npm test` command to `ember doorkeeper`
3. Add your test command to `testCommand` in `.doorkeeperrc.js`. The default is `COVERAGE=true ember test`. For addons, use `COVERAGE=true ember try:each`.
4. Add `!/coverage/coverage-summary.json` to `.gitignore`

## How It Works

The [`ember-cli-code-coverage`](https://github.com/kategengler/ember-cli-code-coverage) addon generates code coverage results in `coverage/coverage-summary.json`. This addon works by generating code coverage for a PR and comparing the results against the code coverage results on the `master` branch (you can configure which branch to compare against in `.doorkeeperrc.js` via the `mainBranch` option).

When adding this to your project for the first time, `coverage/coverage-summary.json` may not be under version control. In this case, your tests will run as normal and code coverage comparison won't run.

## Development Workflow

1. Make a PR
2. CI will run `testCommand` and compare `coverage/coverage-summary.json` with that in `mainBranch`. If coverage drops by `threshold` percent, CI will fail.

In order to keep `coverage/coverage-summary.json` up to date in `mainBranch`, each PR should contain a new `coverage/coverage-summary.json`. CI will still generate a new one and use that to compare against the one in `mainBranch`, but it won't commit it back to the PR. __If someone knows how to do this with various CI systems, please reach out and we can update this README with examples.__
