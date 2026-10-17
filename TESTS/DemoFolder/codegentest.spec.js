const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://automationstepbystep.com/');
  await page.getByRole('link', { name: 'Selenium »' }).click();
  await page.getByRole('link', { name: 'Selenium with Python' }).click();
  await page.getByRole('heading', { name: 'Selenium with Python' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();