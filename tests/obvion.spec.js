// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto('https://www.obvion.nl/');
});

test('Laad Obvion pagina and check rentestanden pagina', async ({ page }) => {
  
    // create a locator
    const actuelerente = page.locator('//div[@class="modiv-tile-wrapper image-toptile"]//a[contains(.,"Actuele rente")]');

    // click locator
    await actuelerente.click();

    //  check page title after loading new page
    await expect(page).toHaveTitle("Actuele hypotheekrente Obvion - Obvion Hypotheken");

});

test('Faal testcase - Laad Obvion pagina and check rentestanden pagina ', async ({ page }) => {
  
  // create a locator
  const actuelerente = page.locator('//div[@class="modiv-tile-wrapper image-toptile"]//a[contains(.,"Actuele rente")]');

  // click locator
  await actuelerente.click();

  //  check page title after loading new page
  await expect(page).toHaveTitle("Actuele hypotheekrente Obvion - Obvion Hypothekenn");

});

test.afterEach(async ({ page }, testInfo) => { 
  await page.close();

  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});

