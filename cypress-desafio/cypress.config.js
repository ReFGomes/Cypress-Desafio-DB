const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bugbank.netlify.app',

    viewportWidth: 1920,
    viewportHeight: 1080,

  },
});
