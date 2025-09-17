import '../tests/hooks.js';
import { test, expect, chromium } from '@playwright/test';

// Note: This example uses Chromium's coverage via CDP. It runs a short session
// and prints coverage size; for full coverage analysis integrate with nyc/istanbul.
test('Coverage: simple JS coverage (Chromium only)', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const client = await context.newCDPSession(page);
  await client.send('Profiler.enable');
  await client.send('Profiler.startPreciseCoverage', { callCount: true, detailed: true });

  await page.goto('https://playwright.dev/');
  await page.waitForLoadState('networkidle');

  const result = await client.send('Profiler.takePreciseCoverage');
  await client.send('Profiler.stopPreciseCoverage');
  await client.send('Profiler.disable');

  // Simple summary: count scripts and total functions
  const scripts = result.result || [];
  console.log('covered scripts:', scripts.length);
  let totalFunctions = 0;
  for (const s of scripts) totalFunctions += (s.functions || []).length;
  console.log('total functions seen:', totalFunctions);

  await browser.close();
  expect(scripts.length).toBeGreaterThan(0);
});
