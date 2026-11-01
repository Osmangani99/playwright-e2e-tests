import { test, expect} from "@playwright/test";

/*
 * Capability: Auto-waiting
 *
 * Scenarios:
 * 1. Just location element — Lazy
 * --  Element is lazy without any action
 * 2. Invalid locator on action method
 * -- Test timeout of 30000ms exceeded.
 * 3. Valid locator but invalid action
 * --  Error: locator.check: Error: Not a checkbox or radio button
 * 4. Invalid locator on expect method
 * -- Expect "toContainText" with timeout 5000ms
  -- waiting for locator('h5')
 */

test.describe("Login functionality", () => {
  test.beforeEach("Go to login page",async ({page}) => {
  // Launch url and assert title and header
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  await expect(page).toHaveTitle("CURA Healthcare Service");
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
  
 // Click on the Make Appointment 
 await page.getByRole("link",{name: "Make Appointment"}).click();
 await expect(page.getByText("Please login to make")).toBeVisible();

  });
  
test ("should login successfully", async ({ page }) => {

   // Auto waiting test
//  let userNameEle = page.getByLabel("Username");
//  await userNameEle.check();

// Successful Login
await page.getByLabel("Username").fill("John Doe");
await page.getByLabel("Password").fill("ThisIsNotAPassword");
await page.getByRole("button",{name: "Login"}).click();

// Assert a text
await expect(page.locator("h2")).toContainText("Make Appointment")
});

// Navigate test 
test("should prevent login with incorrect credentials", async ({ page }) => {
// Unsuccessful Login
await page.getByLabel("Username").fill("John Smith");
await page.getByLabel("Password").fill("ThisIsNotAPassword");
await page.getByRole("button",{name: "Login"}).click();

// Assert a text
await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');
});
});