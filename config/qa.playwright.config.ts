import { defineConfig, devices } from "@playwright/test";
import { baseConfig } from "../playwright.config";
import { EnvConfig } from "../tests/helpers/config-fixtures";
import path from "path"

console.log(`---RUNNING TESTS IN QA ENV---`);

export default defineConfig<EnvConfig>({
  ...baseConfig, //Loads all existing config values
  testDir: path.resolve(process.cwd(),"./tests"),

  use: {
    ...baseConfig.use,
    envName: "QA",
    // appURL: "https://katalon-demo-cura.herokuapp.com/",
    // Local instance from docker/nopcommerce/docker-compose.yml (public demo is behind a bot check)
    nopCommerceWeb: "http://localhost:8081/login?returnUrl=%2Fadmin%2F",
    dbConfig: {
      server: "",
      dbname: "",
      connectionStr: "",
    },
  },
});
