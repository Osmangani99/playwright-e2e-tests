import { test, expect } from "@playwright/test";

// Format entire fileShift + Alt + F

/**
 * Scenario:
1. Login as standard user
2. Get list of products with its price 
3. Assert that all products have non-zero dollar value 
 */

// We will learn aboout how do we handle multiple element 
// How to handle array, How to formate an array 
test.describe("Inventory feature", () => {
  test.beforeEach("Login with valid credintial", async ({ page }) => {
    // Launch the url
    await page.goto("https://www.saucedemo.com/");
    // Login
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    // Assertion 
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await expect(page).toHaveURL(/.*\/inventory/) // parselly assert
  });

  test("Should confirm all prices are non-zero values", async ({page}) => {
            // Get a list of products
        let productsElms = page.locator(".inventory_item");
        await expect(productsElms).toHaveCount(6);

        // Play with the code 
        await page.waitForTimeout(5000)
        console.log(await productsElms.allTextContents())
        console.log("/////////////////////////////////////////////////////////////////////////////////////////")
        console.log(await productsElms.allInnerTexts())


        // till here

        // Get product name and prices
        let totalProducts = await productsElms.count();

        let priceArr = [];
        for (let i = 0; i < totalProducts; i++) {
            let eleNode = productsElms.nth(i);

            // Product name
            let productName = await eleNode.locator(".inventory_item_name").innerText();

        //     // Price
        //     let price = await eleNode.locator(".inventory_item_price").innerText();

        //     // Print the results
        //     console.log(`Product: ${productName}, price: ${price}`);

        //     priceArr.push(price);
        }
  });
});
