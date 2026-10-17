import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('link', { name: 'PlaywrightPractice' }).click();
  //const tablecontent1 = await page.locator("table[name='BookTable']").allTextContents();
  const rows = await page.locator("table[name='BookTable']").allTextContents();
    //const tablecontent1 = await page.getByText('Static Web Table BookName').allTextContents();
  //const col_header = await page.getByRole('columnheader', { name: 'BookName' }).allTextContents();
  //const text1 = await page.getByRole('columnheader', { name: 'Author' }).allTextContents();
  const text2 = await page.getByRole('cell', { name: 'Learn Selenium' }).allTextContents();
  //console.log (tablecontent1);
  console.log(rows);
   //console.log(text2);

})