export class HomePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }

  async expectInstallationVisible() {
    await this.installationHeading.waitFor({ state: 'visible' });
  }
}
