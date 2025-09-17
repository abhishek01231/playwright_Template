Bonus Add-ons
=================

This folder documents example add-ons included in the scaffold: code coverage, API testing, and performance checks.

1) Code coverage (Chromium only)
  - File: `tests/coverage.spec.js`
  - Description: uses Chrome DevTools Protocol (CDP) to gather JS coverage snapshots during page load.
  - How to run:
    - Run with Chromium explicitly:
      ```powershell
      npx playwright test tests/coverage.spec.js --project=chromium --headed
      ```
  - Notes: collected coverage metadata can be processed further with Istanbul/nyc or custom scripts.

2) API testing integration
  - File: `tests/api.spec.js`
  - Description: uses Playwright's `request` fixture to exercise HTTP endpoints (example uses httpbin.org)
  - How to run:
    ```powershell
    npx playwright test tests/api.spec.js
    ```

3) Performance checks
  - File: `tests/performance.spec.js`
  - Description: lightweight performance sampling using `performance.timing` and wall-clock measurement
  - How to run:
    ```powershell
    npx playwright test tests/performance.spec.js --project=chromium --headed
    ```

Tips & next steps
  - For robust performance measurement consider Lighthouse or WebPageTest.
  - For code coverage integration with CI, add steps to store collected coverage JSON and process with nyc/istanbul.
