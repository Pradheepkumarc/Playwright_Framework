const{test}=require('@playwright/test')

test('Login to Application and Get Product Details', async({page})=>
{
    const userMail = await page.locator('#userEmail');
    const userPassword = await page.locator('#userPassword');
    const LoginButton = await page.locator('[class*="login-btn"]');
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await userMail.fill('playwrightautomation_012@gmail.com');
await userPassword.fill('Test190320');
await LoginButton.click();
console.log(await page.locator('[class="card-body"] b').nth(1).textContent());
console.log(await page.locator('[class="card-body"] b').allTextContents());

});