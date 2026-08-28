import { test, expect} from "@playwright/test";

test("should load homepage with correct title", async ({ page }) => {
  // Go to the home page
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // Assert if the title is correct
  await expect(page).toHaveTitle("CURA Healthcare Service");

  // Assert header text
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

// This is for the example 
test ("Should do something",{tag:"@smoke"}, async({page}, testInfo) =>{
 // steps....
 // Code block
});

// demo locator 
test.only ("Should demo locator", async({page}, testInfo) =>{

// ✅`page.getBy()` and `page.locator()` methods returns the `locator` object
// ✅The above methods not to be `awaited`
// ✅The type of locator is an `object`
// ✅Locators are LAZY until an action is fired on them

  // 1. Launch URL
  await page.goto('https://katalon-demo-cura.herokuapp.com/');

  // 2. Click on the Make Appoinment 
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await expect(page.getByText('Please login to make')).toBeVisible();

});
