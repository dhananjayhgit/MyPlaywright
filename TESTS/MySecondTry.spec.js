const{test,expect} = require('@playwright/test')
//import {test,expect} from '@playwright\tests'
 //const{hello,helloworld} = require('./Demo Folder/hello')
 //console.log(hello());
 //console.log(helloworld());
test('MY second TEST', async({page})=>{
await page.goto('https://automationstepbystep.com/');
await expect(page).toHaveTitle('NEVER STOP LEARNING - Automation Step by Step');
await expect(page).toHaveURL('https://automationstepbystep.com/');
//await page.getByLabel('Selenium').click; 
const p =  page.locator('menu-item-4595');
await p.click;
await page.screenshot({ path: 'screenshot1.png' });
})