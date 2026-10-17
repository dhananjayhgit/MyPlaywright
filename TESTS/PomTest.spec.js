import { test, expect } from '@playwright/test';
//import LoginPage from '../Pages/LoginPage';
const LoginPage = require('../Pages/LoginPage');

test('POMTest',async({page})=>{
await page.goto("https://www.saucedemo.com/");
const loginaction = new LoginPage(page); 
await loginaction.login('standard_user','secret_sauce')
await page.pause();
})