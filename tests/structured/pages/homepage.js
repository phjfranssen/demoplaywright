const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.acceptCookies = page.locator(`#onetrust-accept-btn-handler`);
    this.logoLoc = page.locator('[alt="Obvion Hypotheken"]');
    this.actuelerentebutton =  page.locator('//div[@class="modiv-tile-wrapper image-toptile"]//a[contains(.,"Actuele rente")]');
  }

  async navigate() {
    await this.page.goto("https://www.obvion.nl/");
    await this.acceptCookies.click();
  }

  async pageTitle(pagetitle) {
    await expect(this.page).toHaveTitle(pagetitle);
  }

  async logo() {
    await expect(this.logoLoc).toBeVisible();
  }

  async gotorentepagina() {
    await this.actuelerentebutton.click();
  }
};