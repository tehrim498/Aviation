import { defineConfig } from "cypress";
import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({

  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): 
    Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      require("cypress-mochawesome-reporter/plugin")(on);
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
  
  pageLoadTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1200,
  reporter: "cypress-mochawesome-reporter",
  video: true,
  screenshotsFolder: "images",
});