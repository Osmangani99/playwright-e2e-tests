import { test, expect } from "@playwright/test";

// Format entire fileShift + Alt + F

/**
 * Scenario:
1. Login as standard user
2. Get list of products with its price 
3. Assert that all products have non-zero dollar value 
 */

test.describe("Inventory feature", () => {
  test.beforeEach("Login with valid credintial", async ({ page }) => {
    // Launch the url
    await page.goto("https://www.saucedemo.com/");
    // Login
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    // Assertion 
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await expect(page).toHaveURL(/.*\/inventory/) // parselly assert
  });

  test("Should confirm all prices are non-zero values", async () => {});
});
