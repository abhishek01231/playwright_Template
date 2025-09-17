Playwright test framework (ES modules)

Overview

This repository is a Playwright test scaffold designed for medium-to-large UI test suites. It uses ES modules, a Page Object Model (POM) structure, fixtures for test data, and CI workflows to run tests and store artifacts.

Quickstart

1. Install dependencies:

```powershell
npm install
npx playwright install --with-deps
```

2. Run tests (local):

```powershell
npm test
```

3. View HTML report:

```powershell
npm run test:report
```

PowerShell note

If you encounter the `npx.ps1 cannot be loaded` error, run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Repository layout

- `tests/` - test files (ES modules)
- `pages/` - Page Object Model classes
- `utils/` - helper utilities and data generators
- `fixtures/` - static test data (JSON)
- `.github/workflows/` - CI workflows (Playwright tests + artifact upload)
- `playwright.config.js` - Playwright configuration (reporters, projects, media)

Best practices included

- POM-based tests for maintainability
- Test hooks to capture screenshots and videos on failure
- HTML and Allure reporter integration (Allure CLI required locally)
- Cross-browser projects (Chromium, Firefox, WebKit)
- CI workflow to run tests on push/PR and upload reports

Next steps

- Add explicit fixtures for auth flows (if needed).
- Configure Allure CLI in CI if you want Allure artifacts to be published.
- Add per-environment config files and secrets management for staging/prod.
