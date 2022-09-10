const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.acceptCookies = page.locator(`#onetrust-accept-btn-handler`);
    this.logoLoc = page.locator('[alt="Obvion Hypotheken"]');
  }

  async navigate() {
    await this.page.goto("https://www.obvion.nl/");
    // Accept cookies
    await this.acceptCookies.click();
  }

  async pageTitle(pagetitle) {
    await expect(this.page).toHaveTitle(pagetitle);
  }

  async logo(page) {
    await expect(this.logoLoc).toBeVisible();
  }
};