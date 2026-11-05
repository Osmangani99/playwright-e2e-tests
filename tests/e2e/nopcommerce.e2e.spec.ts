import { test, expect,request } from "@playwright/test";
import HomePage from "../../page-objects/nopcommerce.home.page";
import CustomerListPage from "../../page-objects/nopcommerce.customerListPage.page";
import { log } from "../../tests/helpers/logger";
import constants from "../../data/constants.json";

test.describe("E2E Customer Search", () => {
  test("E2E_TC001: Search the external customers in customer portal", async ({
    page,
    request,
  }, testInfo) => {
    // Env Config
    const envConfig = testInfo.project.use as any;

    /**1. GET the list of users */
    // Make a GET call
      await log(
        "info",
        `Making a GET call to get list of users ${envConfig.apiURL}`,
      );
      const response = await request.get(
        `${envConfig.apiURL}${constants.REQ_RES_ENDPOINTS.GET_USERS_LIST}`,
        {
          headers: {
            "x-api-key": process.env.RES_RES_API_KEY,
          },
        },
      );

      // Assert the status code
      expect(response.status()).toBe(200);
      await log("info", `The GET call is successful with ${response.status()}`);

      // Get list of users
      const userData = await response.json();
      log("info", `List of users: ${JSON.stringify(userData)}`);

      /** 2. Login to web */
      const homePage = new HomePage(page);
      await homePage.loginToNopcommerce(
        process.env.NOPCOMMERCE_WEB_URL!,
        process.env.NOP_COMMERCE_TEST_USERNAME!,
        process.env.NOP_COMMERCE_TEST_PASSWORD!,
      );

      /**3. customer deatils to search */
      const USER_DATA = userData.data;

      // Customer search
      const customerListPage = new CustomerListPage(page);
      await customerListPage.goToCustomerListPage(
        `${envConfig.nopCommerceWeb}/Admin/Customer/List`,
      );

      // Iterate over the list of users

      for (const user of USER_DATA) {
        let customerNotFound = await customerListPage.searchAndConfirmUser(
          user.first_name,
          user.last_name,
        );

        if (customerNotFound) {
          await log(
            "warn",
            `The given user: ${user.first_name} ${user.last_name} could not found in the portal`,
          );
        } else {
          await log(
            "info",
            `The given user: ${user.first_name} ${user.last_name} is found in the portal`,
          );
        }
      }
    });
  });

