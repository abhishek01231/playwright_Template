Playwright test framework scaffold (ES modules)

Getting started

1. Install dependencies:

```powershell
npm install
npx playwright install
```

2. Run tests:

```powershell
npm test
```

3. View HTML report:

```powershell
npm run test:report
```

PowerShell note

If you see an error like "npx.ps1 cannot be loaded because running scripts is disabled on this system", run PowerShell as Administrator and execute:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Allure reporting

Allure reporter is configured in `playwright.config.js`. To publish or view Allure reports you'll need the Allure commandline tool or CI integration.
