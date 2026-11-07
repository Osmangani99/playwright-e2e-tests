import { expect, test } from "@playwright/test";

test.describe("CURA Healthcare Service", () => {
  test("Negative Appointment Booking Without Required Visit Date", async ({
    page,
  }) => {
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

    // 3. Attempt to book an appointment without the required visit date.
    await page.getByRole("button", { name: "Book Appointment" }).click();

    // 4. Verify the form remains displayed, the date is empty, and no confirmation is shown.
    await expect(
      page.getByRole("heading", { name: "Make Appointment" }),
    ).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: "Visit Date (Required)" }),
    ).toBeEmpty();
    await expect(
      page.getByRole("heading", { name: "Appointment Confirmation" }),
    ).toHaveCount(0);
  });
});
