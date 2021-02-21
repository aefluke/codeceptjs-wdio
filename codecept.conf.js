const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

const browsers = () => { return (process.env.BROWSERS) ? process.env.BROWSERS.split(',') : ["chrome","firefox"]; };

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.sahibinden.com',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      desiredCapabilities: {
        chromeOptions: {
          args: ['--disable-extensions', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
        }
      },
      waitForTimeout: 7000,
      smartWait: 5000,
      timeouts: {
        "script": 60000,
        "page load": 10000
      }
    },
    ChaiWrapper: {
      "require": "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js',
    /*pages*/
    homePage: './pages/home_page.js',
    detailedSearchPage: './pages/detailed_search_page.js',
    searchResultsPage: './pages/search_results_page.js',
    /*fragments*/
    headerFragment: './fragments/header_fragment.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'sahibinden-ui',
  multiple: {
    "chrome": {
      "browsers": ["chrome"]
    },
    "firefox": {
      "browsers": ["firefox"]
    },
    "parallel": {
      "chunks": 2,
      "browsers": browsers()
    }
  },
  plugins: {
    wdio: {
      enabled: false,
      services: ['selenium-standalone']
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}