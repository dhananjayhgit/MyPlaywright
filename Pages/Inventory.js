//This is a page object model for INVENTORY page of saucedemo.com
import { test, expect } from '@playwright/test';
class Inventory
 {
    constructor(page)
        {
            this.page = page;
            //this.UserName = { role: 'textbox', name: 'Username' };
            this.backPackItem = page.getByText('Sauce Labs Backpack');
            this.backPackPrice = page.locator('[data-test="inventory-item-price"]');
            this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
            this.menuButton = page.getByRole('button', { name: 'Open Menu' });
            //this.logoutLink = page.getByRole('link', { name: 'Logout' });
            this.logoutLink = page.getByText('Logout');
            this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
        }
    async addItemToCart()
        {
            await this.backPackItem.click();
            await expect(this.backPackPrice).toHaveText('$29.99');
            await this.addToCartButton.click();
            await this.menuButton.click();
            await this.logoutLink.click();
        }
   }
module.exports = Inventory;