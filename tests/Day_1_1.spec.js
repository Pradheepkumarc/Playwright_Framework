const{test, expect}=require('@playwright/test')
test.only('launch browser and get title', async ({page})=>
{
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    console.log(await page.title());
    await expect(page).toHaveTitle('EventHub — Discover & Book Events');
await page.pause();
});