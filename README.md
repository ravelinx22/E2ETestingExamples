# E2ETestingExamples

This project has four examples of E2E testing using the following frameworks:

* Cypress
* Nightwatch
* Protractor
* Webdriver.io

## Running tests instructions

### Cypress

Import the folder cypress/cypress/ and run the simple_spec.js file.

### Protractor

Install dependencies:

```
npm install
```

Run tests

```
ng e2e
```

### Webdriver.io

Install dependencies:

```
npm install
```

Run tests

```
node_modules/.bin/wdio wdio.conf.js
```
### Nightwatch

Install dependencies:

```
npm install -g nightwatch
npm install -g webdriver-manager
```

Update webdriver

```
webdriver-manager update
```

Start webdriver

```
webdriver-manager start
```

In another terminal start tests with the following command:

```
nightwatch
```
