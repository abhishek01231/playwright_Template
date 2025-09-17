import { test } from '@playwright/test';

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== 'passed') {
    try {
      const name = testInfo.title.replace(/[^a-z0-9\.\-]/gi, '_');
      const filePath = `test-results/${name}-${Date.now()}.png`;
      await page.screenshot({ path: filePath, fullPage: true });
      // Attach screenshot to the report
      await testInfo.attach('screenshot', { path: filePath, contentType: 'image/png' });
    } catch (e) {
      // don't fail the test because of screenshot error
      // eslint-disable-next-line no-console
      console.log('Failed to capture screenshot in afterEach:', e);
    }
  }
});
