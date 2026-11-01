import { expect, type Locator, type Page } from "@playwright/test";
import { log } from "../tests/helpers/logger";
import BasePage from "./base.page";

export default class HomePage extends BasePage {
  // Constructor
  constructor(page: Page) {
    super(page);
  }

  /** Elements */
  get userNameInputBox() {
    return this.page.getByRole("textbox", { name: "Email:" });
  }
  get passwordInputBox() {
    return this.page.getByRole("textbox", { name: "Password" });
  }
  get loginButton() {
    return this.page.getByRole("button", { name: "Log in" });
  }

  /** Page Actions */

  async loginToNopcommerce(url: string, username: string, password: string) {
    // Login
    await this.navigateTO(url);
    await this.type(this.userNameInputBox, username);
    await this.type(this.passwordInputBox, password);
    await this.click(this.loginButton);

    // Assert login success
    await expect(this.page).toHaveURL(/\/admin\/?$/);
    await log("info", `Home page is successfully launched`);
  }
}
