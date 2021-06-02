UI Automation - WebDriverIO with Cucumber
=================

This is an UI Automation Tests project of testing purchase workflow against http://automationpractice.com  
These tests are developed in JS with [WebDriverIO](http://webdriver.io/) and [Cucumber](https://cucumber.io/)  
This is a little demo project, to run NodeJS, using Cucumber.js as a behaviour testing suite, for automated browser tests. It gives you a base foundation to set up running BDD tests in any environment that has Node.JS and Selenium2-Server-Standalone WebDriver.

Requirements
---------------

- node >= 10.15.x - [how to install Node](https://nodejs.org/en/download/)
- jdk >= 1.8

Getting Started
---------------

Install the dependencies:

```bash
npm install
```

Run tests with Head:

```bash
npm run test
```

Run tests without Head:

```bash
ARG_HEADLESS='--headless' npm run test
```

Run tests inside Docker container:

```bash
docker build -t test_image -f Dockerfile .
docker run -it --rm --name test-container test_image
```


How to write a test
---------------
Tests are written in Gherkin syntax that means that you write down what's supposed to happen in a real language. All test files are located in ./src/features/* and have the file ending .feature. You will already find some test files in that directory.

Reports
---------------

To generate the allure report in the directory `./test-report/allure-report`:

```bash
npm run report:generate
```

To open the allure report on the browser:

```bash
npm run report:open
```

