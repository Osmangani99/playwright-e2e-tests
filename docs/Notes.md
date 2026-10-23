
## ELEMENT: Button, link
- Click 
- Press
- Double click
- Right click
- Hover if link
- Optional timeout if slow
- Clear/click before filling
- Fill
- pressSequentially( Slow typing)

## ELEMENT: Dropdown
- Assert default option
- Select by: 
- label
- Index
- Assert the count
- Get all dropdown values
- Assert the default option - to be checked/unchecked
- Check/uncheck

**Scenario:**
1. Login as standard user
2. Get list of products with its price 
3. Assert that all products have non-zero dollar value 

**Allure Setup**
1. Check if allure is installed globally -> `allure --version`, if not present
2. Install allure commandline globally -> `npm install -g allure-commandline`
3. Install 'Allure' Reporter for project level - `npm install -D allure-playwright`
4. Add it in the config file

reporter: [
  ['html'],                  // Default Playwright HTML reporter
  ['allure-playwright'],     // Allure reporter
],

6. Run a test and confirm that the new folder is created `allure-results`
7. Spin up the report -> `allure serve`
8. Done! 🎉

**Screenshot**
1. Config options ->`use` -> `screenshot`
2. At test scope level

### pseudo-code
1. [✅] Create `global-setup.ts` file
2. [✅] As per the rule, export a single function that takes a config object
3. [✅] Delete allure reporter
   - [✅] Get the `allure-report` path
   - [✅] Use `path` module to get the path
   - [✅] Use `fs` native module's sync method `existsSync, rmSync` to delete files
4. [✅ ] Link it to `config` file
5. [✅] Run a simple test to confirm if allure results is deleted
6. [✅ ] Add a `RUNNER` in `.env`
7. [✅ ] Install `dotenv` package and load it in config file
8. [✅] Add a logic to delete only for `local` runs
9. [✅] Done 🎉

## Global Teardown setup
### pseudo-code
1. Create `global-teardown.ts` under `helper`
2. Link it to the `config`
3. Done 🎉

**Understanding Playwright Parallelism**
1. Do you know the number of CPU of your current machine?
    1. `node -e "console.log('CPU cores:', require('os').cpus().length)"`

2. Do you know how many tests you have in the current projects?
    1. `npx playwright test --list`

3. What are the key components/setting affect the parall runs?

4. Reference: `https://playwright.dev/docs/test-parallel`

## Data alocation 
1. API Endpoint(/user) = static Data             ---constants.json
2. SQL Query Template = static Data              ---constants.json
3. Password           = Sensitive Data           --- .env
4. Test Data(data parameterization) = Test Data  ---parameterization
5. App url            = Env Config               ---config file
6. System Gen Auth/Token = Dynamic Data          ---Global setup


## Data handling inplaywright 

**Handling Static/Constants Data**
1. Store all static data and constants in constants.json under the /data folder.
2. Import the JSON file wherever required.



### Parameterizing Tests – forEach Dataset

1. Create a `test-data.ts` file under the `/data` folder.
2. Create a `TestData` class and define a `static` method.
3. Update the test data combinations.

***Test Data Combinations***

- **Dropdown**
  - Tokyo CURA Healthcare Center
  - Hongkong CURA Healthcare Center
  - Seoul CURA Healthcare Center

- **Healthcare Program**
  - Medicare
  - Medicaid
  - None

- **Different Dates**
  - 05/10/2025
  - 05/11/2025
  - 05/12/2025

4. Access the test data and confirm the iteration.
5. Apply it to the `spec` file.

🌐 Global Data Setup — Dynamic Data
Initialize a global variable in the `global-setup.ts` file.
Set it anywhere in your project using `node.properties.<KEY>`.
Access it anywhere, with the option to reset it in the `global-teardown.ts` file.
Done! 🚀

Steps to Follow

1. Create a Config Fixture

Create a new fixture file named config-fixtures.ts under the /helpers folder.
Follow the existing documentation:
Define the EnvConfig type and target fields.
Define an option and provide a default value.
Extend the existing test function to include the custom variables.

2. Create a New Config

Create a new config file named test.playwright.config.ts under the /config folder.
Ensure there is only one export default defineConfig declaration.
Update the root config export:
Change export default defineConfig({}) to export const baseConfig = defineConfig({}).
Import the root config and baseConfig from ../playwright.config.ts.
Extend the root config settings using the spread operator.

Note: The new config should extend the existing config settings rather than replace them.


**Handling Sensitive Data**

1. Check or install if `dotenv` if not,
   1. `npm install -D dotenv`
2. Set the variables in `.env` config file
3. Start using them with `process.env.<varname>`
4. Done! 🎉

### How to use .csv file for test data
1. Create a `.csv` file 
2. Read the file with native `fs` module
3. Parse the csv data -> Array of data (install csv- parse) 
4. console out the data 
5. Done! 

## Logger Setup 
1. Install Chalk -> `npm -i --save-dev chalk`
2.Create a file `test/helpers/logger.ts`
3.Import the log function and start logging
4. Run a test and see the logs 
5. Done