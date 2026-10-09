
const{test, expect}=require('@playwright/test')
//start with url launch 

test('Create account' , async ({page})=>
{
    const userMail = await page.locator('#userEmail');
    const userPassword = await page.locator('#userPassword');
    const LoginButton = await page.locator('[class*="login-btn"]');
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await page.locator('[class="text-reset"]').click();
const Registrationtitle =await page.locator('[class="login-title"]').textContent();
console.log(Registrationtitle);
await expect(page.locator('[class="login-title"]')).toContainText('Register');
await page.locator('#firstName').fill("testaccount");
await page.locator('#lastName').fill("account");
await userMail.fill('playwrightautomation_012@gmail.com');
await page.locator('#userMobile').fill('1234567890');
await userPassword.fill('Test190320');
await page.locator('#confirmPassword').fill('Test190320');
await page.locator('[type="checkbox"]').click();
await LoginButton.click();
await page.locator('[class="btn btn-primary"]').click();
const logintitle =await page.locator('[class="login-title"]').textContent();
console.log(logintitle);
await expect(page.locator('[class="login-title"]')).toContainText('Log in');
 page.pause();
});