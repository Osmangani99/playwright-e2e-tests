# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional\login.spec.ts >> Login functionality >> should login successfully
- Location: tests\functional\login.spec.ts:16:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h2')
Expected substring: "Make Appointment FAIL"
Received string:    "Make Appointment"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h2')
    14 × locator resolved to <h2>Make Appointment</h2>
       - unexpected value "Make Appointment"

```

```yaml
- heading "Make Appointment" [level=2]
```

# Test source

```ts
  1  | import { test, expect} from "@playwright/test";
  2  | 
  3  | test.describe("Login functionality", () => {
  4  |   test.beforeEach("Go to login page",async ({page}) => {
  5  |   // Launch url and assert title and header
  6  |   await page.goto("https://katalon-demo-cura.herokuapp.com/");
  7  |   await expect(page).toHaveTitle("CURA Healthcare Service");
  8  |   await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
  9  |   
  10 |  // Click on the Make Appointment 
  11 |  await page.getByRole("link",{name: "Make Appointment"}).click();
  12 |  await expect(page.getByText("Please login to make")).toBeVisible();
  13 | 
  14 |   });
  15 |   
  16 | test("should login successfully", async ({ page }) => {
  17 | // Successful Login
  18 | await page.getByLabel("Username").fill("John Doe");
  19 | await page.getByLabel("Password").fill("ThisIsNotAPassword");
  20 | await page.getByRole("button",{name: "Login"}).click();
  21 | 
  22 | // Assert a text
  23 | // TEMP: intentionally failing — original expected text is "Make Appointment"
> 24 | await expect(page.locator("h2")).toContainText("Make Appointment FAIL")
     |                                  ^ Error: expect(locator).toContainText(expected) failed
  25 | });
  26 | 
  27 | // Navigate test 
  28 | test("should prevent login with incorrect credentials", async ({ page }) => {
  29 | // Unsuccessful Login
  30 | await page.getByLabel("Username").fill("John Smith");
  31 | await page.getByLabel("Password").fill("ThisIsNotAPassword");
  32 | await page.getByRole("button",{name: "Login"}).click();
  33 | 
  34 | // Assert a text
  35 | await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');
  36 | });
  37 | });
```