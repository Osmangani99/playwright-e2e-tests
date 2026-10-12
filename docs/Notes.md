
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