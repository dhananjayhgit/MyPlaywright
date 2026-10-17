const { chromium } = require('playwright');
const{test,expect} = require('@playwright/test');
test('MY FIRST CODEGEN TEST',(async () => 
  {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://automationstepbystep.com/');
  await page.getByRole('link', { name: 'Selenium »' }).click();
  await page.getByRole('link', { name: 'Selenium with Python' }).click();
  await page.getByRole('heading', { name: 'Selenium with Python' }).click();
  await context.close();
  await browser.close();
}))