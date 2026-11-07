import { type Locator, type Page } from "@playwright/test";
import { CURA_HOME_URL, type CuraCredentials } from "../data/cura-login.data";

export default class CuraLoginPage {
  readonly homepageHeading: Locator;
  readonly makeAppointmentLink: Locator;
  readonly loginHeading: Locator;
  readonly loginMessage: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly appointmentHeading: Locator;
  readonly facilitySelector: Locator;
  readonly readmissionCheckbox: Locator;
  readonly medicareOption: Locator;
  readonly medicaidOption: Locator;
  readonly noHealthcareProgramOption: Locator;
  readonly visitDateInput: Locator;
  readonly commentInput: Locator;
  readonly bookAppointmentButton: Locator;

  constructor(private readonly page: Page) {
    this.homepageHeading = page.getByRole("heading", {
      name: "CURA Healthcare Service",
      level: 1,
    });
    this.makeAppointmentLink = page.getByRole("link", {
      name: "Make Appointment",
    });
    this.loginHeading = page.getByRole("heading", { name: "Login" });
    this.loginMessage = page.getByText("Please login to make appointment.");
    // These IDs target the editable fields rather than the read-only demo credential fields.
    this.usernameInput = page.locator("#txt-username");
    this.passwordInput = page.locator("#txt-password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.appointmentHeading = page.getByRole("heading", {
      name: "Make Appointment",
    });
    this.facilitySelector = page.getByLabel("Facility");
    this.readmissionCheckbox = page.getByRole("checkbox", {
      name: "Apply for hospital readmission",
    });
    this.medicareOption = page.getByRole("radio", { name: "Medicare" });
    this.medicaidOption = page.getByRole("radio", { name: "Medicaid" });
    this.noHealthcareProgramOption = page.getByRole("radio", { name: "None" });
    this.visitDateInput = page.getByRole("textbox", {
      name: "Visit Date (Required)",
    });
    this.commentInput = page.getByRole("textbox", { name: "Comment" });
    this.bookAppointmentButton = page.getByRole("button", {
      name: "Book Appointment",
    });
  }

  async navigateToHomePage(): Promise<void> {
    await this.page.goto(CURA_HOME_URL);
  }

  async openLoginPage(): Promise<void> {
    await this.makeAppointmentLink.click();
  }

  async login(credentials: CuraCredentials): Promise<void> {
    await this.usernameInput.fill(credentials.username);
    await this.passwordInput.fill(credentials.password);
    await this.loginButton.click();
  }
}
