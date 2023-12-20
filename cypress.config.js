const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // viewportWidth:700,   // -> If you want to set the particular height and width for every test cases
  // viewportHeight:900
});
