import '../tests/hooks.js';
import { test, expect } from '@playwright/test';

// Lightweight performance example: gather basic metrics and ensure load time is reasonable.
test('Performance: page metrics example', async ({ page }) => {
  const start = Date.now();
  await page.goto('https://playwright.dev/');
  await page.waitForLoadState('networkidle');
  const duration = Date.now() - start;

  // Basic page metrics through performance.timing or performance.getEntries
  const perfTiming = await page.evaluate(() => JSON.stringify(window.performance.timing));

  console.log('navigation duration(ms):', duration);
  console.log('performance.timing:', perfTiming.substring(0, 200));

  // Assert page loads within a reasonable time (example threshold)
  expect(duration).toBeLessThan(15000);
});
