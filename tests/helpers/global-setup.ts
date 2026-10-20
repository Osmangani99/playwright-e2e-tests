import { type FullConfig } from "@playwright/test";
import path from "path/win32";
import fs from "fs";

export default async function globalSetup(config: FullConfig) {
    console.log(`>> [INFO]: Starting the global setup process...`);

  if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
    console.log(">> [INFO]: Detecting local runs....");
    // Delete allure result
    const resultsDir = path.resolve(process.cwd(), "allure-results");
    console.log(`>> resultsDir: ${resultsDir} `);

    if (fs.existsSync(resultsDir)) {
      console.log(`>> Deleting allure-results directory...`);
      fs.rmSync(resultsDir, { recursive: true, force: true });
      console.log(">> [INFO]: allure-results deleted from the local run...😊");
    }
  }

  // set login cookies global variable
  process.env.LOGIN_COOKIES = undefined

}
