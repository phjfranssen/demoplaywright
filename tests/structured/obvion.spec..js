const { test } = require("@playwright/test");
const { HomePage } = require("./pages/homepage");

test.describe("Home Tests", () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
  });

  test("Verify Home page title", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.pageTitle("Hypotheken voor nu en morgen - Obvion Hypotheken");
  });

  test("Verify Logo on Home page", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.logo();
  });
});

  test('Laad Obvion pagina and check rentestanden pagina', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.gotorentepagina();
    await homePage.pageTitle("Actuele hypotheekrente Obvion - Obvion Hypotheken");
  });

  test.afterEach(async ({ page}) => {
    await page.close();
  });