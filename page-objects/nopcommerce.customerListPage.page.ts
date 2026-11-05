import { expect, type Locator, type Page } from "@playwright/test";
import { log } from "../tests/helpers/logger";
import BasePage from "./base.page";

export default class CustomerListPage extends BasePage {
  // Constructor
  constructor(page: Page) {
    super(page);
  }

  /** Elements */
  get firstNameInputBox() {
    return this.page.getByRole("textbox", { name: `First name` });
  }
  get lastNameInputBox() {
    return this.page.getByRole("textbox", { name: `Last name` });
  }
  get searchBtn() {
    return this.page.locator("[id=search-customers]");
  }
  get noResultMessage() {
    return this.page.getByRole("cell", { name: `No data available in table` });
  }

  /** Page Actions */
  async goToCustomerListPage(CustomerListPageUrl: string) {
    this.navigateTO(CustomerListPageUrl);
  }

  // search actions
  async searchAndConfirmUser(
    firstName: string,
    lastName: string,
  ): Promise<Boolean> {
    await log(
      "info",
      `searching the user with firstname: ${firstName} and lastname: ${lastName}...`,
    );
    //search actions
    await this.type(this.firstNameInputBox, firstName);
    await this.type(this.lastNameInputBox, lastName);
    await this.click(this.searchBtn);

    // Check whether the customer present
    await this.page.waitForTimeout(1_500); //1.5s delay
    let customerNotFound = await this.noResultMessage.isVisible();
    return customerNotFound;
  }
}

/**
 *  await page.getByRole('textbox', { name: `First name`}).fill(`Alex`);
    await page.getByRole('textbox', { name: `Last name`}).fill(`Smith`);
    await page.getByRole('textbox', { name: `Search`}).click();

    await page.locator('[id=search-customers]').click();
 */
