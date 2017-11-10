[![Build Status](https://travis-ci.org/skaterdav85/ember-cli-doorman.svg?branch=master)](https://travis-ci.org/skaterdav85/ember-cli-doorman)

# ember-cli-doorman

This Ember CLI addon will fail a test suite if code coverage drops by a specified threshold. For now, this is meant to be used with `ember-cli-code-coverage`.

## Installation and Configuration

```
ember install ember-cli-doorman
```

Update your `npm test` command in `package.json` to `ember doorman`.

Add your test command to `testCommand` to `.doormanrc.js` in the root of your project.

Lastly, add the following line to `.gitignore`:

```
!/coverage/coverage-summary.json
```
