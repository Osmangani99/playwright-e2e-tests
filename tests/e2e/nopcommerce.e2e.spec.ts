import { test } from '@playwright/test';
import HomePage from '../../page-objects/nopcommerce.home.page';


test ('Login to Nopcommerce web app', async ({ page }) => {
    // Create an page object
   const homePage = new HomePage(page);

    // Login nopCommerceWeb
    await homePage.loginToNopcommerce(
        process.env.NOPCOMMERCE_WEB_URL!,
        process.env.NOP_COMMERCE_TEST_USERNAME!,
        process.env.NOP_COMMERCE_TEST_PASSWORD!);
});
