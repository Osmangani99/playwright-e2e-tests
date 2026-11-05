import {test, expect} from '@playwright/test';

test('should display the correct title', async ({ page }) => {

    await page.getByRole('textbox', { name: `First name`}).fill(`Alex`);
    await page.getByRole('textbox', { name: `Last name`}).fill(`Smith`);
    await page.getByRole('textbox', { name: `Search`}).click();

    await page.locator('[id=search-customers]').click();


});