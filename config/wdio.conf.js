const server = require('./server');
const profiles = require('./server.profiles.json');

exports.config = {

    // Provide selenium server information: default/remote
    runner: profiles[server].runner,
    hostname: profiles[server].hostname,
    port: profiles[server].port,
    path: profiles[server].path,

    // Configure base url
    baseUrl: 'http://automationpractice.com',

    // Choose feature files to execute
    specs: ['./test/features/*.feature'],

    // Browser configurations
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--no-sandbox', '--window-size=1920,1080', `${process.env.ARG_HEADLESS}`]
            }
        },
    ],

    // Configure level of logs
    logLevel: 'trace',
    outputDir: './test-report/output',
    bail: 0,

    // Configure timeouts
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    // Configure reporter tools
    reporters: [
        'dot',
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false,
            },
        ]
    ],

    // Select test framework
    framework: 'cucumber',
    cucumberOpts: {
        requireModule: ['@babel/register'],
        require: ['./test/steps/steps.definitions.js'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },

    // Define and start required services
    services: [
        ['selenium-standalone']
    ],

    // Configure Cucumber Hooks
    before() {
        browser.setWindowSize(1920, 1080);
        browser.totalPrice = 0;
    }
};
