const{test,expect}=require('@playwright/test')

test('Launch Browser',async ({page})=>
{
await page.goto('https://www.google.com/');
});
test('get browser title',async ({page})=>
{
await page.goto('https://www.google.com/');
await expect(page).toHaveTitle('Google');
page.pause();
});