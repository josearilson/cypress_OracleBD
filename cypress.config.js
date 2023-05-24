const { defineConfig } = require('cypress');

module.exports = defineConfig({
  "nodeVersion": "system",
  "env": {
    "db": {
      "user": "SPREAD",
      "password": "SPREAD_1896",
      "connectString": "(description=(address_list=(address=(protocol=tcp)(host=brux0040) (port=1521)))(connect_data= (sid=T12MOB11)))"
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
