import { test, type Page, type Locator } from "@playwright/test";

/**
 * Helper function to take a full page screenshot and attach it to the test report.
 * @param page - The Playwright Page object.
 * @param screenshotName - The name of the screenshot file.
 */
async function takeFullPageScreenshot(page: Page, screenshotName: string) {
  await page.screenshot({ fullPage: true });
  await test.info().attach(screenshotName, {
    body: screenshotName,
    contentType: "image/png",
  });
}

/**
 * This helper will take screenshot for element
 * @param element
 * @param screenshotName
 */
async function takeElementScreenshot(element: Locator, screenshotName: string) {
  // take screenshot of the element
  const screenshot = await element.screenshot();

  //Attach it to the report
  await test.info().attach(screenshotName, {
    body: screenshotName,
    contentType: "image/png",
  });
}

// we can add more helper function here

export default { takeFullPageScreenshot, takeElementScreenshot }
