const { defineConfig } = require("cypress");

module.exports = defineConfig(
{
    viewportWidth: 1300,
    viewportHeight: 800,
    video: true,
    chromeWebSecurity: false,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
        reportDir: 'cypress/reports/mochawesome-report/',
        overwrite: true,
        html: true,
        json: true,
        timestamp: 'dd-mm-yyyy_HH-MM-ss'
    },
    e2e: {
        defaultCommandTimeout: 9000,
        experimentalRunAllSpecs: true,
        hideXHRInCommandLog: true,
        baseUrl: "https://webdriveruniversity.com/index.html",
        //Aqui ficarão todos os meus testes:
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});