import { test, expect } from "@playwright/test";

test.describe("Make Appointment functionality", () => {
  test.beforeEach("Login with valid credentials", async ({ page }) => {
    // launch the application
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

    // Click on the Make Appointment
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("Please login to make")).toBeVisible();

    // Successful Login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
  });

  test("should make an appointment with non-default values", async ({ page }) => {
    // Dropdown
    await page
      .getByLabel("Facility")
      .selectOption("Hongkong CURA Healthcare Center");

    // Checkbox
    await page.getByText("Apply for hospital readmission").click();

    // Radio button
    await page.getByRole("radio", { name: "Medicaid" }).check();

    // Date picker
    const visitDate = page.getByRole("textbox", { name: "Visit Date (Required)" });
    await visitDate.click();
    await visitDate.fill("05/10/2027");
    await visitDate.press("Enter"); // commit the typed date into the datepicker widget
    await page.locator("#appointment span").click(); // close the date picker

    // Comment
    await page
      .getByRole("textbox", { name: "Comment" })
      .fill("This is a multi-line comments \ncapture by playwright codegen");

    // Click on the Book Appointment button
    await page.getByRole("button", { name: "Book Appointment" }).click();
    await expect(
      page.getByRole("heading", { name: "Appointment Confirmation" }),
    ).toBeVisible();
  });
});
