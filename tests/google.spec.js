import '../tests/hooks.js';
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';

test('Playwright site smoke: title and get started', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await expect(page).toHaveTitle(/Playwright/);

    await home.clickGetStarted();
    await home.expectInstallationVisible();
});
