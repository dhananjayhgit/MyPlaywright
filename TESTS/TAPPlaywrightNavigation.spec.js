
import { test, expect } from '@playwright/test';
test('TAPPlaywrightNavigation',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
await expect (page).toHaveTitle('Automation Testing Practice')
await page.getByRole('link', { name: 'PlaywrightPractice' }).click
//await expect (page.locator('h3:has-text("PlaywrightPractice")')).toHaveText('PlaywrightPractice')
 await page.locator('h3:has-text("PlaywrightPractice")').toBeVisible
//await expect (page.locator('h3:has-text("PlaywrightPractice")')).toHaveText('PlaywrightPractice')
//await expect (page.locator('h3.post-title.entry-title')).toHaveText('PlaywrightPractice')
await expect (page.getByText('PlaywrightPractice')).toHaveText('PlaywrightPractice')
})

