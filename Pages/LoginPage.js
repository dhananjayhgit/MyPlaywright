//This is a page object model for login functionalitiy of saucedemo.com
class LoginPage
 {
    constructor(page)
        {
            this.page = page;
            //this.UserName = { role: 'textbox', name: 'Username' };
            this.Password = '[data-test="password"]';
            this.LoginButton = '[data-test="login-button"]';
            this.UserName = page.getByRole('textbox', { name: 'Username' });
        
        }
    async login(Username,Password)
        {
            //await this.page.getByRole(this.UserName.role, { name: this.UserName.name }).fill(Username);
            await this.UserName.fill(Username);
            await this.page.fill(this.Password,Password);
            await this.page.screenshot({ path: 'test-results/screenshots/viewport.png' });
            await this.page.click(this.LoginButton);
        }
   }
module.exports = LoginPage;