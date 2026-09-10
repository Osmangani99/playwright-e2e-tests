    import { test, expect } from "@playwright/test";

    // copy line Shift + Alt + ↓ (Down) or ↑ (Up)

    /**
     * ELEMENT: Checkbox/ Radio button
     * 
     * Actions
    1. Assert the default option - to be checked/unchecked
    2. Check/uncheck
     */

    test.describe("Make Appointment functionality", () => {
        // Navigate to the Make Appointment page and login with valid credentials before each test
    test.beforeEach("Login with valid credentials", async ({ page }) => {
        // launch the application
        await page.goto("https://katalon-demo-cura.herokuapp.com/");

        // 📍Click on the Make Appointment
        await page.getByRole("link", { name: "Make Appointment" }).click({timeout: 10_000}); // Time out
        await expect(page.getByText("Please login to make")).toBeVisible();

        // Successful Login
            await page.getByLabel("Username").fill("John Doe");
            await page.getByLabel("Password").fill("ThisIsNotAPassword");
            await page.getByRole("button", { name: "Login" }).click();
    });

    // Test case to make an appointment with non-default values
    test("should make an appointment with non-default values", async ({ page }) => {
        // Assert default option 
        await expect(page.getByLabel("Facility")).toHaveValue("Tokyo CURA Healthcare Center"); 

        // select by label, index and value
        await page .getByLabel("Facility") .selectOption("Hongkong CURA Healthcare Center");
        await page .getByLabel("Facility") .selectOption({label:"Seoul CURA Healthcare Center"});
        await page .getByLabel("Facility") .selectOption({index:2});

        // Assert the count
        let dropdownOptions = await page.getByLabel("Facility").locator('option');
        await expect (dropdownOptions).toHaveCount(3);

        // Get all dropdown values using for.. loop
        let listOfDropdownElements = await page.getByLabel("Facility").all();

        // for.. loop to findout all the open of the dropdown values
        // very interesting to see how we can get all the dropdown values using for.. loop in typescript array and push them into array
        let listOfDropdownValues: (string | null)[] = [];

        for (let element of listOfDropdownElements ){
            let elementText = await element.textContent();
            if (elementText){
                listOfDropdownValues.push(elementText); 
            }
        }
        
        console.log("Dropdown values:--------------------- ", listOfDropdownValues);

        // Checkbox
        await page.getByText("Apply for hospital readmission").check();

        await expect (page.getByRole("radio", { name: "Medicare" })).toBeChecked();
        // Radio button
        await page.getByText("Medicaid").check();
        await expect (page.getByRole("radio", { name: "Medicare" })).not.toBeChecked();

        // Date picker
        const visitDate = page.getByRole("textbox", { name: "Visit Date (Required)" });
        await visitDate.click();
        await visitDate.fill("05/10/2027");
        await visitDate.press("Enter"); // commit the typed date into the datepicker widget
        await page.locator("#appointment span").click(); // close the date picker

        // Comment
        await page.getByRole("textbox", { name: "Comment" }).fill("This is a multi-line comments \ncapture by playwright codegen");

        // Click on the Book Appointment button
        await page.getByRole("button", { name: "Book Appointment" }).click();
        // assert the confirmation page is displayed 
        await expect(page.getByRole("heading", { name: "Appointment Confirmation" })).toBeVisible();
        await page.waitForTimeout(5000); // wait for 5 seconds to see the confirmation page
    });
    });
