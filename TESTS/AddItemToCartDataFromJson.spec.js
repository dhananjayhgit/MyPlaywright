import { test, expect } from '@playwright/test';
//import LoginPage from '../Pages/LoginPage';
const Inventory = require('../Pages/Inventory');
const LoginPage = require('../Pages/LoginPage');
const data = (require('../Testdata/sauceDemoUsers.json'))


for (const dataRec of data){
    test.describe(`AddItemFlowByUser ${dataRec.ID}`,function()
    {
        test('AddItemToCart',async({page})=>
        {
            await page.goto("https://www.saucedemo.com/");
            const loginaction = new LoginPage(page); 
            await loginaction.login(dataRec.Username,dataRec.Password)
            //-------------------
            const addItemToCart = new Inventory(page);
            await addItemToCart.addItemToCart();
            await page.pause();
        })
    })}