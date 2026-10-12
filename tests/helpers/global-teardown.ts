import { type FullConfig } from "@playwright/test";
import { spawn } from "child_process";

export default async function globalTeardown(config: FullConfig) {
  // after all worker is complete we can cleanup the test data
  console.log(`>> [INFO]: Starting global teardown...`);

  if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
    console.log(">> Local run detected - starting Allure server...");
    // Run detached so the server survives after Playwright exits
    const allure = spawn("allure serve allure-results", {
      shell: true,
      detached: true,
      stdio: "ignore",
    });
    allure.on("error", (error) => {
      console.error("Error: starting Allure server:", error.message);
    });
    allure.unref();
  }
  console.log(`>> [INFO]: Completed the global teardown process...`);
}
