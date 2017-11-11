[![Build Status](https://travis-ci.org/skaterdav85/ember-cli-doorkeeper.svg?branch=master)](https://travis-ci.org/skaterdav85/ember-cli-doorkeeper)

# ember-cli-doorkeeper

This Ember CLI addon will fail a test suite if code coverage drops by a specified threshold. For now, this is meant to be used with `ember-cli-code-coverage`.

## Installation and Configuration

```
ember install ember-cli-doorkeeper
```

Update your `npm test` command in `package.json` to `ember doorkeeper`.

Add your test command to `testCommand` in `.doorkeeperrc.js`, which was created in the root of your project during installation.

Lastly, add the following line to `.gitignore`:

```
!/coverage/coverage-summary.json
```
