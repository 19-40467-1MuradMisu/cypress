const { defineConfig } = require('cypress')

module.exports = defineConfig({

     // add this line
  e2e: {
    //chromeWebSecurity: false,
    setupNodeEvents(on, config) {
  
      // implement node event listeners here
    }
  }
})
// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   component: {
//     devServer: {
//       framework: 'angular',
//       bundler: 'webpack',
//     },
//     specPattern: '**/*.cy.ts',
//   },

//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   }
// })