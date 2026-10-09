# Instructions and Notes

## General Tips for windows 
- Format entire file `Shift + Alt + F`
- copy line `Shift + Alt + ↓ (Down) or ↑ (Up)`
- short cut to emoji is `win + .`
- formate the seleted lines `Ctrl + k` and `Ctrl + F`
- want to see report  `npx playwright show-report`

## In this session...
✅1. Install playwright
   - `npm init playwright@latest`
2. Check if installed correctly
   - `npx playwright --help`

## Key callouts

- [Q1] Will I get these commands in the course?
  - [Ans] Yes, will attach them in `Resources` section
- [Q] What if the commands shown in the file changed?
  - [Ans] ALWAYS check and refer for `resources`

 ✅ **Recommended VS Code Extensions**

- vscode-icons
- Prettier — Code formatter
- Path Intellisense
- npm Intellisense
- DotENV
- JavaScript (ES6) code snippets
- .gitignore Generator

✅ **Setup Git Repo**

1. Git commands

- `git init`
- `git status`
- `git add .`
- `git commit -m "<commit-message>"`

2. git ignore the following files

- /debug
- /logs/
- .env
- allure-results
- tests-examples/
- example.*
- *.log

## Writing First Test

**Target web app: https://katalon-demo-cura.herokuapp.com/
Steps
Go to the home page
Assert if the title is correct
Assert header text
Done! 🎉

## Option 1 — Install VS Code Extension

- VS Code Extension -> Playwright Test for VSCode

## Option 2 — CLI
Help -> `npx playwright codegen` --help
CLI basic command -> `npx playwright codegen`
With URL -> `npx playwright codegen` https://katalon-demo-cura.herokuapp.com/

**Deep Dive into Playwright Locators**

- [ ] `page.getBy()` and `page.locator()` methods returns the `locator` object
- [ ] The above methods not to be `awaited`
- [ ] The type of locator is an `object`
- [ ] Locators are LAZY until an action is fired on them

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
```ts
reporter: [
  ['html'],                  // Default Playwright HTML reporter
  ['allure-playwright'],     // Allure reporter
],
```
6. Run a test and confirm that the new folder is created `allure-results`
7. Spin up the report -> `allure serve`
8. Done! 🎉

**Screenshot**
1. Config options ->`use` -> `screenshot`
2. At test scope level