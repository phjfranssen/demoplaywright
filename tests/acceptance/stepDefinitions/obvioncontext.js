const { Given, When, Then } = require('@cucumber/cucumber');
// import expect for assertion
const { expect } = require("@playwright/test")

//launch url
const url = 'https://www.obvion.nl/'

//define selectors
const actuelerente = '//div[@class="modiv-tile-wrapper image-toptile"]//a[contains(.,"Actuele rente")]'
const homepageElement = '[alt="Obvion Hypotheken"]';

Given('a user has navigated to the homepage', async () => {
      // navigate to the app
      await page.goto(url);
      // locate the element in the webUI
      const locator = await page.locator(homepageElement);
      // assert that it's visible
      await expect(locator).toBeVisible();
   })
 
 When('the user clicks actuelerente knop', async () => {
    // click the button
    await page.locator(actuelerente).click();
 })
 
 Then('the title page should be {string}', async (item) => {
       // get text of the item that is visible in the UI
       await expect(page).toHaveTitle(item);
    })