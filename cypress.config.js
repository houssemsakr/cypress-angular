const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement Node event listeners here if needed
    },
    baseUrl: 'http://angular:80', 
    supportFile: false, 
    defaultCommandTimeout: 100000, 
  },
});
