const{test,expect} = require('@playwright/test')
test('AsertionTest', async({page})=>{
await page.goto('https://kitchen.applitools.com/');
await page.pause();
//verify The Kitchen heading on home page'
await expect(page.locator('text=The Kitchen')).toBeVisible();
await expect.soft(page.locator('text=The Kitchen')).toBeHidden();
await expect(page.locator('text=A pantry full of web components that can be used for automated testing.')).toBeVisible();
await expect(page.getByRole('link', { name: 'Alert' })).toBeVisible()
await page.getByRole('link', { name: 'Alert' }).click()

})