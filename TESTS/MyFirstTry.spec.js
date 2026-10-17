//const{test,expect} = require('@playwright/test')
import {test,expect} from '@playwright/test'
 //const{hello,helloworld} = require('./Demo Folder/hello')
 //console.log(hello());
 //console.log(helloworld());
test('MY FIRST TEST', async({page})=>{
await page.goto('https://www.google.com');
await expect(page).toHaveTitle('Google');
})