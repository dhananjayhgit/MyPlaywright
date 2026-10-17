import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  //get by role locators
  await page.getByRole('link', { name: 'PlaywrightPractice' }).click();
  await page.getByRole('button', { name: 'Primary Action' }).click();
  await page.getByRole('button', { name: 'Toggle Button' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('test input');
  await page.getByRole('checkbox', { name: 'Accept terms' }).check();
  await page.locator('#role-locators').getByRole('link', { name: 'Home' }).click();
  await page.locator('#role-locators').getByRole('link', { name: 'Products' }).click();
  await page.locator('#role-locators').getByRole('link', { name: 'Contact' }).click();
  await page.locator('#testid-locators').getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('button', { name: 'Div with button role' }).click();
  await page.getByText('This is an important alert').click();
//get by text locators
  await page.getByText('This paragraph contains some').click();
  await page.getByText('colored text').click();
  await page.getByText('List item 1').click();
  await page.getByText('List item 2 with link').click();
  await page.getByRole('link', { name: 'link' }).click();
  await page.getByText('Special: Unique text').click();
  await page.getByRole('button', { name: 'Submit Form' }).click();
  const visible= await page.getByText('Click the button above to submit your information.').isVisible();
  const textcontent=await page.getByText('Click the button above to submit your information.').textContent();
  console.log(visible);
  console.log(textcontent);
//get by Label
  await page.getByText('Email Address:').click();
  await page.getByLabel('Email Address:').fill('test email address')
  await page.getByRole('textbox', { name: 'Password:' }).fill('dummypassword');
  await page.getByRole('spinbutton', { name: 'Your Age:' }).click();
  await page.getByRole('spinbutton', { name: 'Your Age:' }).fill('20');
  await page.getByRole('radio', { name: 'Standard' }).check();
//get by place holder  
await page.getByPlaceholder('Enter your full name').fill('Dhananjay Harawade');
//get by ALT text
await page.getByAltText('logo image').click();
//get by Title
const textcontent1 = await page.getByTitle('HyperText Markup Language').textContent();
const textcontent2 = await page.getByTitle('Home page link').textContent();
console.log(textcontent1);
console.log(textcontent2);
//Get by test-id attribute
  const profilename = await page.getByTestId('profile-name').textContent();
  const editbuttonlabel = await page.getByTestId('edit-profile-btn').textContent();
  const price1 = await page.getByTestId('product-card-1').getByTestId('product-price').textContent();
  const price2 = await page.getByTestId('product-card-2').getByTestId('product-price').textContent();
console.log(profilename);
console.log(editbuttonlabel);
console.log(price1);
console.log(price2);
console.log(page.context())
});