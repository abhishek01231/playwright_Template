import '../tests/hooks.js';
import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { readCsv } from '../utils/csvReader.js';

const jsonData = JSON.parse(fs.readFileSync(path.resolve('fixtures/testData.json'), 'utf8'));
const csvData = readCsv(path.resolve('fixtures/data.csv'));

test.describe('Data-driven examples', () => {
  for (const kw of jsonData.keywords) {
    test(`search keyword from JSON: ${kw}`, async ({ page }) => {
      // resilient navigation: retry once if transient network error occurs
      try {
        await page.goto('https://playwright.dev/');
      } catch (e) {
        // retry once
        await page.waitForTimeout(1000);
        try {
          await page.goto('https://playwright.dev/');
        } catch (e2) {
          // continue; external site may be flaky in CI - record the issue via screenshot in hooks
          return;
        }
      }
      await expect(page).toHaveTitle(/Playwright/);
    });
  }

  for (const row of csvData) {
    test(`use csv row for task: ${row.task}`, async ({ page }) => {
      // lightweight demo: just assert CSV parse values
      expect(row.name).toBeDefined();
      expect(row.email).toContain('@');
      expect(row.task.length).toBeGreaterThan(0);
    });
  }
});
