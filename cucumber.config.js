const { Before, After, setDefaultTimeout, Status } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

setDefaultTimeout(60000);

// launch the browser
Before(async function () {
   global.browser = await chromium.launch({
       headless: true,
       slowMo: 1000,
   });
   global.context = await global.browser.newContext();
   global.page = await global.context.newPage();
});

// close the browser
After(async function (Scenario) {
   if (Scenario.result.status === Status.FAILED) {
      await this.attach(await page.screenshot({path: 'results/screenshots/failedscreenshot.png', fullPage: true }) , "image/png");
   }
   await global.browser.close();
});