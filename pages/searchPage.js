export class SearchPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    // multiple fallbacks for search input to handle variations/locales
    this.searchInput = page.locator('input[name="q"]');
    this.searchInputFallbacks = [
      'input[name="q"]',
      'input[aria-label="Search"]',
      'input[type="search"]',
      'input[jsname]'
    ];
    this.results = page.locator('#search');
    // multiple possible consent button selectors to handle locales/variations
    this.acceptSelectors = [
      'button:has-text("Accept all")',
      'button:has-text("I agree")',
      'button:has-text("Agree")',
      'button:has-text("Accept")',
      '#L2AGLb',
      'form[action*="consent"] button'
    ];
  }

  async goto() {
    await this.page.goto('https://www.google.com');
  }

  async acceptCookiesIfVisible() {
    for (const selector of this.acceptSelectors) {
      try {
        const el = this.page.locator(selector);
        if (await el.count() > 0 && await el.first().isVisible()) {
          await el.first().click();
          // give consent dialog a moment to disappear
          await this.page.waitForTimeout(500);
          return;
        }
      } catch (e) {
        // ignore selector errors and try next
      }
    }
  }

  async search(keyword) {
    // Ensure the input is visible and focused before filling
    let inputFound = false;
    for (const sel of this.searchInputFallbacks) {
      const input = this.page.locator(sel);
      if ((await input.count()) > 0) {
        try {
          await input.waitFor({ state: 'visible', timeout: 3000 });
          await input.click({ timeout: 2000 });
          await input.fill(keyword, { timeout: 2000 });
          inputFound = true;
          this.searchInput = input;
          break;
        } catch (e) {
          // try next selector
        }
      }
    }
    if (!inputFound) {
      // as a last resort try role-based locator
      const combo = this.page.getByRole('combobox', { name: 'Search' });
      if ((await combo.count()) > 0) {
        await combo.first().fill(keyword);
        inputFound = true;
        this.searchInput = combo.first();
      }
    }
    if (!inputFound) throw new Error('Search input not found');
    await this.page.keyboard.press('Enter');
    // wait for results container (if present) or navigation
    try {
      await this.results.waitFor({ timeout: 10000 });
    } catch (e) {
      await this.page.waitForLoadState('networkidle');
    }
  }

  async getSearchInputValue() {
    return await this.searchInput.inputValue();
  }
}
