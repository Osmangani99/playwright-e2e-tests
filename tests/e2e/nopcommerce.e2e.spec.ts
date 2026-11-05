import { test } from "@playwright/test";
import HomePage from "../../page-objects/nopcommerce.home.page";
import CustomerListPage from "../../page-objects/nopcommerce.customerListPage.page";
import { log } from "../../tests/helpers/logger";

test.describe("E2E Customer Search", () => {
  test("E2E_TC001: Search the external customers in customer portal", async ({
    page,
  }, testInfo) => {
    // Env Config
    const envConfig = testInfo.project.use as any;

    // Login nopCommerceWeb
    const homePage = new HomePage(page);
    await homePage.loginToNopcommerce(
      process.env.NOPCOMMERCE_WEB_URL!,
      process.env.NOP_COMMERCE_TEST_USERNAME!,
      process.env.NOP_COMMERCE_TEST_PASSWORD!,
    );

    // customer deatils to search
    const USER_DATA = {
      firstName: "Osman",
      lastname: "Gani",
    };

    // Customer search
    const customerListPage = new CustomerListPage(page);
    await customerListPage.goToCustomerListPage(
      `${envConfig.nopCommerceWeb}/Admin/Customer/List`,
    );
    let customerNotFound = await customerListPage.searchAndConfirmUser(
      USER_DATA.firstName,
      USER_DATA.lastname,
    );

    if (customerNotFound) {
      await log(
        "warn",
        `The given user: ${USER_DATA.firstName} ${USER_DATA.lastname} could not found in the portal`,
      );
    } else {
      await log(
        "info",
        `The given user: ${USER_DATA.firstName} ${USER_DATA.lastname} is found in the portal`,
      );
    }
  });
});
