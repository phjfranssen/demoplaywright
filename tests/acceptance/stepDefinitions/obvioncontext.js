const { Given, When, Then } = require('@cucumber/cucumber');
// import expect for assertion
const { expect } = require("@playwright/test")

//launch url
const url = 'https://www.obvion.nl/'

//define selectors
const actuelerente = '//div[@class="modiv-tile-wrapper image-toptile"]//a[contains(.,"Actuele rente")]'
const homepageElement = '[alt="Obvion Hypotheken"]';
const searchbar = '[placeholder="Typ hier je zoekopdracht\.\.\."]';
const searchbutton = 'text=Zoeken';

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

Given('a users enters a search term {string}', async (searchterm) => {
      // navigate to the app
      await page.goto(url);

      // locate the element in the webUI
      const searchbarlocator = await page.locator(searchbar);

      // assert that it's visible
      await expect(searchbarlocator).toBeVisible();

      // enter search criteria 
      await searchbarlocator.type(searchterm);
   })
 
 When('doing a search operation', async () => {
      // locate the element in the webUI
      const searchbuttonlocator = await page.locator(searchbutton);
   
      // click search button
      await searchbuttonlocator.click();
   })
 
 Then('the search results consists of {string}', async (searchresult) => {
      // locate the first element in the search results
      const firstsearchresult = await page.locator('text=${searchresult}');
      await firstsearchresult.toBeVisible; 
   })