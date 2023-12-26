const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  //setting the url to fetch globally
  env:{
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
  // viewportWidth:700,   // -> If you want to set the particular height and width for every test cases
  // viewportHeight:900

  // "includeShadowDom":true   //If you want to enable the shadow DOM 
});
