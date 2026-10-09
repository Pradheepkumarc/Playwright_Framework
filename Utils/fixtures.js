const base= require('@playwright/test');
const test = require('@playwright/test');
const { use } = require('react');

customtest = base.test.extend({
    authentication:async({browser},use)=>
{
     const userMail = await page.locator('#userEmail');
    const userPassword = await page.locator('#userPassword');
    const LoginButton = await page.locator('[class*="login-btn"]');

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await userMail.fill('playwrightautomation_012@gmail.com');
await userPassword.fill('Test190320');
await LoginButton.waitFor();
await LoginButton.click();
await use(page);
},

createorder:async({},use)=>{
    on

}    

})