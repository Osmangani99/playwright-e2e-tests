import { expect, test } from "@playwright/test";

test.describe("CURA Healthcare Service", () => {
  test("Positive Appointment Booking With Selected Options", async ({ page }) => {
    // 1. Open the CURA Healthcare Service home page and select Make Appointment.
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(
      page.getByText("Please login to make appointment."),
    ).toBeVisible();

    // 2. Log in using the valid demo credentials.
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(
      page.getByRole("heading", { name: "Make Appointment" }),
    ).toBeVisible();

    // 3. Select the facility, readmission option, and healthcare program.
    await page
      .getByLabel("Facility")
      .selectOption("Hongkong CURA Healthcare Center");
    await page
      .getByRole("checkbox", { name: "Apply for hospital readmission" })
      .check();
    await page.getByRole("radio", { name: "Medicaid" }).check();

    // 4. Select a date next month, enter a comment, and book the appointment.
    const visitDate = page.getByRole("textbox", {
      name: "Visit Date (Required)",
    });
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1, 8);
    const expectedVisitDate = `${String(nextMonth.getDate()).padStart(2, "0")}/${String(nextMonth.getMonth() + 1).padStart(2, "0")}/${nextMonth.getFullYear()}`;
    await visitDate.click();
    await page.getByRole("columnheader", { name: "»" }).click();
    await page.getByRole("cell", { name: "8", exact: true }).first().click();
    await expect(visitDate).toHaveValue(expectedVisitDate);
    await page
      .getByRole("textbox", { name: "Comment" })
      .fill("Positive appointment scenario");
    await page.getByRole("button", { name: "Book Appointment" }).click();

    // 5. Verify the confirmation page and submitted appointment details.
    await expect(
      page.getByRole("heading", { name: "Appointment Confirmation" }),
    ).toBeVisible();
    await expect(
      page.getByText("Hongkong CURA Healthcare Center"),
    ).toBeVisible();
    await expect(page.getByText("Yes")).toBeVisible();
    await expect(page.getByText("Medicaid")).toBeVisible();
    await expect(page.getByText(expectedVisitDate, { exact: true })).toBeVisible();
    await expect(
      page.getByText("Positive appointment scenario"),
    ).toBeVisible();
  });
});
