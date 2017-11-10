[![Build Status](https://travis-ci.org/skaterdav85/ember-cli-gatekeeper.svg?branch=master)](https://travis-ci.org/skaterdav85/ember-cli-gatekeeper)

# ember-cli-gatekeeper

This Ember CLI addon will fail a test suite if code coverage drops by a specified threshold. For now, this is meant to be used with `ember-cli-code-coverage`.

## Installation and Configuration

```
ember install ember-cli-gatekeeper
```

Update your `npm test` command in `package.json` to `ember gatekeeper`.

Add your test command to `testCommand` to `.gatekeeperrc.js` in the root of your project.

Lastly, add the following line to `.gitignore`:

```
!/coverage/coverage-summary.json
```
