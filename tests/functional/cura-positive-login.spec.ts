import { expect, test } from "@playwright/test";
import { CURA_DEMO_CREDENTIALS } from "../data/cura-login.data";
import CuraLoginPage from "../page-objects/cura-login.page";

test.describe("Authentication", () => {
  test("Positive: valid demo credentials open the appointment form", async ({ page }) => {
    const curaLoginPage = new CuraLoginPage(page);

    // 1. Start from a fresh browser state and open the CURA Healthcare Service homepage.
    await curaLoginPage.navigateToHomePage();
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(curaLoginPage.homepageHeading).toBeVisible();
    await expect(curaLoginPage.makeAppointmentLink).toBeVisible();

    // 2. Select Make Appointment to display the login page.
    await curaLoginPage.openLoginPage();
    await expect(curaLoginPage.loginHeading).toBeVisible();
    await expect(curaLoginPage.loginMessage).toBeVisible();
    await expect(curaLoginPage.usernameInput).toBeVisible();
    await expect(curaLoginPage.passwordInput).toBeVisible();
    await expect(curaLoginPage.loginButton).toBeVisible();

    // 3. Enter the displayed demo credentials and select Login.
    await curaLoginPage.login(CURA_DEMO_CREDENTIALS);

    // Verify the authenticated Make Appointment form and its available controls.
    await expect(curaLoginPage.appointmentHeading).toBeVisible();
    await expect(curaLoginPage.facilitySelector).toBeVisible();
    await expect(curaLoginPage.readmissionCheckbox).toBeVisible();
    await expect(curaLoginPage.medicareOption).toBeVisible();
    await expect(curaLoginPage.medicaidOption).toBeVisible();
    await expect(curaLoginPage.noHealthcareProgramOption).toBeVisible();
    await expect(curaLoginPage.visitDateInput).toBeVisible();
    await expect(curaLoginPage.commentInput).toBeVisible();
    await expect(curaLoginPage.bookAppointmentButton).toBeVisible();
  });
});
