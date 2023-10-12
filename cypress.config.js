const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bh1g8p",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});