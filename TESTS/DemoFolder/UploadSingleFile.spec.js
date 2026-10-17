import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('link', { name: 'PlaywrightPractice' }).click();
  await page.locator('#singleFileInput').click();
  await page.locator('#singleFileInput').setInputFiles('C:/Users/admin/Downloads/api testing.txt');
  await page.getByRole('button', { name: 'Upload Single File' }).click();
});