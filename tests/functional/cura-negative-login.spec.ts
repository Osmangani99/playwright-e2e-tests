import { expect, test } from "@playwright/test";

test.describe("CURA Healthcare Service", () => {
  test("Negative Login With Invalid Credentials", async ({ page }) => {
    // 1. Open the CURA Healthcare Service home page.
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(
      page.getByRole("heading", {
        name: "CURA Healthcare Service",
        level: 1,
      }),
    ).toBeVisible();

    // 2. Select Make Appointment to open the login page.
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(
      page.getByText("Please login to make appointment."),
    ).toBeVisible();

    // 3. Enter and submit invalid credentials.
    await page.getByLabel("Username").fill("invalid-user");
    await page.getByLabel("Password").fill("invalid-password");
    await page.getByRole("button", { name: "Login" }).click();

    // 4. Verify the login failure message and confirm the login page remains open.
    await expect(
      page.getByText("Login failed! Please ensure"),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
  });
});
