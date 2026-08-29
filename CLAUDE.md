# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A learning/practice repo for Playwright E2E testing (TypeScript, CommonJS). All current tests target the public demo site **CURA Healthcare Service** (`https://katalon-demo-cura.herokuapp.com/`) — there is no app source code here, only tests.

The `wk1/` directory is unrelated JS-fundamentals practice (plain `.js` files on comments, data types, loops, variables) — not Playwright tests, safe to ignore unless asked about it directly.

## Commands

Install browsers once after `npm install` (not scripted): `npx playwright install`

- Run all tests: `npx playwright test`
- Run a single spec file: `npx playwright test tests/functional/login.spec.ts`
- Run a single test by name: `npx playwright test -g "should login successfully"`
- Run headed (see the browser): add `--headed`
- Run in debug mode: `npx playwright test --debug`
- View the HTML report after a run: `npx playwright show-report`
- Generate a new test via recorder: `npx playwright codegen https://katalon-demo-cura.herokuapp.com/`
- npm shortcuts (headed) for the two named specs: `npm run login`, `npm run demo`

There is no lint, typecheck, or build script configured in `package.json` — don't assume one exists.

## Architecture / conventions

- `playwright.config.ts`: `testDir` is `./tests`; only the **chromium** project is enabled (firefox/webkit/mobile/branded-browser projects are present but commented out — enable them there, not by adding new config). `trace` is `on-first-retry`. No `baseURL` and no `webServer` are configured, so every test calls `page.goto()` with the full URL.
- dotenv loading is present in `playwright.config.ts` but commented out; `.env` / `.env.example` exist but are currently empty.
- Tests are plain `@playwright/test` specs, not organized into page objects or fixtures yet — locators and flow steps are written inline per test. When adding tests, follow the existing style in [tests/functional/login.spec.ts](tests/functional/login.spec.ts): `test.describe` block + `test.beforeEach` for shared setup (navigate, verify title/header, click through to the flow under test).
- Locator preference (see notes in `README.md` and used throughout tests): prefer `page.getByRole()` / `page.getByLabel()` / `page.getByText()` over raw CSS/XPath. `getBy*`/`locator()` calls return a `Locator` and are not awaited themselves — only the action/assertion on them is awaited.
- CI (`.github/workflows/playwright.yml`) runs `npx playwright install --with-deps` then `npx playwright test` on push/PR to `main`/`master`, and uploads `playwright-report/` as an artifact.
