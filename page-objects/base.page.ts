import { expect, type Locator, type Page } from "@playwright/test";
import { log } from "../tests/helpers/logger";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /* All reusable  actions */
  async navigateTO(path: string) {
    await log("info", `Navigating to the path ${path}`);
    await this.page.goto(path);
  }

  /** Click Action */

  async click(ele: Locator) {
    try {
      await expect(ele).toBeVisible({ timeout: 10_000 }); // Custom timeout: Default - 5 seconds
      await ele.click();
    } catch (error) {
      await log(
        "error",
        `Failed to click on the element: ${ele.toString()},original error: ${error}`,
      );
      throw error;
    }
  }

  /** Type action */
  async type(ele: Locator, text: string) {
    {
      try {
        await expect(ele).toBeVisible({ timeout: 10_000 }); // custom timeout
        await ele.fill(text);
      } catch (error) {
        await log(
          "error",
          `Failed to type into element: ${ele.toString()},original error: ${error}`,
        );
        throw error;
      }
    }
  }
}
