import { test, expect } from '@playwright/test';

// Public demo is behind a bot check - see tests/e2e/nopcommerce.e2e.spec.ts for the local version
test.skip('test', async ({ page }) => {
  // Launch URL
    await page.goto('https://admin-demo.nopcommerce.com');
    await page.getByRole('textbox', { name: 'Email:' }).fill(`admin@yourstore.com`);
    await page.getByRole('textbox', { name: 'Password:' }).fill(`admin`);
    await page.getByRole('button', { name: 'Log in' }).click();


  // Verify login success
  await expect(page).toHaveURL('https://admin-demo.nopcommerce.com/admin/');

});