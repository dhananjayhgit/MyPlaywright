import { test, expect } from '@playwright/test';
//import LoginPage from '../Pages/LoginPage';
const Inventory = require('../Pages/Inventory');
const LoginPage = require('../Pages/LoginPage');

test('AddItemToCart',async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const loginaction = new LoginPage(page); 
    await loginaction.login('standard_user','secret_sauce')
    //-------------------
    const addItemToCart = new Inventory(page);
    await addItemToCart.addItemToCart();
    await page.pause();
})