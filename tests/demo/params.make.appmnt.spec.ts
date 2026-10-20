import { test, expect } from "@playwright/test";
import TestData from "../../data/test-data";

const makeApptTestData = TestData.makeAppoinmentTestData();

// Access the data
for (const apptData of makeApptTestData) {

test.describe("Make Appointment functionality", () => {
  // Navigate to the Make Appointment page and login with valid credentials before each test
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

  // Test case to make an appointment with non-default values
  test(`${apptData.testId}: should make an appointment with non-default values`, async ({
    page,
  }, testInfo) => {
    // Print current config details
    console.log(
      `current config details \n: ${JSON.stringify(testInfo.config)}`,
    );

    // Dropdown
    await page
      .getByLabel("Facility")
      .selectOption(apptData.facility);

    // Checkbox
    await page.getByText("Apply for hospital readmission").click();

    // Radio button
    await page.getByText(apptData.hcp).check();

    // Date picker
    const visitDate = page.getByRole("textbox", {
      name: "Visit Date (Required)",
    });
    await visitDate.click();
    await visitDate.fill(apptData.visitDt);
    await visitDate.press("Enter"); // commit the typed date into the datepicker widget
    await page.locator("#appointment span").click(); // close the date picker

    // Comment
    await page
      .getByRole("textbox", { name: "Comment" })
      .fill("This is a multi-line comments \ncapture by playwright codegen");

    // Click on the Book Appointment button
    await page.getByRole("button", { name: "Book Appointment" }).click();
    // assert the confirmation page is displayed
    await expect(
      page.getByRole("heading", { name: "Appointment Confirmation" }),
    ).toBeVisible();
    await page.waitForTimeout(5000); // wait for 5 seconds to see the confirmation page
  });
});

}


