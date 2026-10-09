const{test, expect}=require('@playwright/test')

test('Login to Application and Get Product Details', async({page})=>
{
    const userMail = await page.locator('#userEmail');
    const userPassword = await page.locator('#userPassword');
    const LoginButton = await page.locator('[class*="login-btn"]');
    const Items = await page.locator('.card-body');
    const Cart = await page.locator('li h3');
    const OderConfrimPage = await page.locator('tbody tr td');
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await userMail.fill('playwrightautomation_012@gmail.com');
await userPassword.fill('Test190320');
await LoginButton.click();
console.log(await page.locator('[class="card-body"] b').nth(1).textContent());
// console.log(await page.locator('[class="card-body"] b').allTextContents());

const totalcount= await Items.count();
console.log(totalcount);
for(let i=0;i<totalcount;i++){
    console.log( await Items.nth(i).locator('b').textContent());
    const expectedvalue = await Items.nth(i).locator('b').textContent();
    
     if(expectedvalue=== "iphone 13 pro"){
        await Items.nth(i).locator("text= Add To Cart").click();
        break;
     }
}
await page.locator('[routerlink="/dashboard/cart"]').waitFor();
await page.locator('[routerlink="/dashboard/cart"]').click();
await page.locator('text=Checkout').click();
await page.locator('[placeholder*="Country"]').pressSequentially('ind',{delay:200});
const Searchresult = await page.locator('[class*="ta-results"]');
const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
}
await page.locator('[class="actions"] a').click();

await expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");
   const orderID = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
 

await page.locator("button[routerlink='/dashboard/myorders']").click();
await page.locator('h1').waitFor();
const rows = await page.locator("tbody tr");

for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderID.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }

const finalOrderID = await page.locator('.col-text').textContent();
 expect(orderID.includes(finalOrderID)).toBeTruthy();

await page.pause();
});