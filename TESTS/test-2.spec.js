import { test, expect } from '@playwright/test';
import {LoginPage} from '../Pages/LoginPage';
//const LoginPage = require("../Pages/LoginPage");
test('test',async({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const Login = new LoginPage(page);
  await Login.login('standard_user','secret_sauce');
  
});