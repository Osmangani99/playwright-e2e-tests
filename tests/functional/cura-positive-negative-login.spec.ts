import { expect, test } from "@playwright/test";

// spec: specs/cura-healthcare-test-plan.md
// seed: tests/seed.spec.ts
test.describe("Authentication", () => {
  test("Positive and Negative Login Attempts", async ({ page }) => {
    // 1. Start from a fresh browser state and open the CURA Healthcare Service homepage.
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(
      page.getByRole("heading", {
        name: "CURA Healthcare Service",
        level: 1,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Make Appointment" }),
    ).toBeVisible();

    // 2. Select Make Appointment and verify the Login form is displayed.
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
    await expect(
      page.getByText("Please login to make appointment."),
    ).toBeVisible();

    const username = page.getByLabel("Username");
    const password = page.getByLabel("Password");
    const loginButton = page.getByRole("button", { name: "Login" });
    await expect(username).toBeVisible();
    await expect(password).toBeVisible();
    await expect(loginButton).toBeVisible();

    // 3. Submit invalid credentials and verify authentication is denied.
    await username.fill("invalid-user");
    await password.fill("invalid-password");
    await loginButton.click();
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
    await expect(
      page.getByText(
        "Login failed! Please ensure the username and password are valid.",
      ),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "History" })).toHaveCount(0);
    await expect(page.getByRole("link", { name: "Profile" })).toHaveCount(0);

    // 4. Replace the invalid credentials with the demo credentials and verify successful login.
    await username.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await loginButton.click();
    await expect(
      page.getByRole("heading", { name: "Make Appointment" }),
    ).toBeVisible();
    await expect(page.getByLabel("Facility")).toBeVisible();
    await expect(
      page.getByRole("checkbox", { name: "Apply for hospital readmission" }),
    ).toBeVisible();
    await expect(page.getByRole("radio", { name: "Medicare" })).toBeVisible();
    await expect(page.getByRole("radio", { name: "Medicaid" })).toBeVisible();
    await expect(page.getByRole("radio", { name: "None" })).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: "Visit Date (Required)" }),
    ).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Comment" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Book Appointment" }),
    ).toBeVisible();
  });
});
