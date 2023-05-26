const { defineConfig } = require('cypress');

module.exports = defineConfig({
  "nodeVersion": "system",
  "env": {
    "db": {
      "user": "xxxxxxxxx",
      "password": "xxxxxxxxxxxxxxxxxxxx",
      "connectString": "(description=(address_list=(address=(protocol=tcp)(host=xxxxx) (port=xxxxxxx)))(connect_data= (sid=xxxxxxx)))"
    }
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    }

  }
});
