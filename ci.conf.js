const merge = require("lodash.merge");
const { config: baseConfig } = require("./codecept.conf.js");

const specificConfig = {
    helpers: {
        WebDriver: {
            protocol: "http",
            host: process.env.SELENIUM_STANDALONE_CHROME_PORT_4444_TCP_ADDR || "127.0.0.1",
            port: 4444,
        },
    },
    plugins: {
        wdio: {
            enabled: false
        }
    }
};
exports.config = merge(baseConfig, specificConfig);
