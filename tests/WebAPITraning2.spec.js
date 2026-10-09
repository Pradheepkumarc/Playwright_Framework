const{test,expect,request}=require('@playwright/test');
const{ ApiUtils }=require('./Utils/ApiUtils');
 const payload = {"userEmail":"playwrightautomation_012@gmail.com","userPassword":"Test190320"};
    const orderPayload = { orders: [{country: "India",productOrderedId: "6960eac0c941646b7a8b3e68"}]};
let response;

test.beforeAll(async()=>
{
   const apiContext = await request.newContext();
   const apiutils = new ApiUtils(apiContext,payload);
 response = await apiutils.createorder(orderPayload);
   console.log(response);
}
);
test('@API Place the order', async ({page})=>
{ 
    await page.addInitScript(value => {
 
        window.localStorage.setItem('token',value);
    }, response.token );
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
 await page.locator("button[routerlink*='myorders']").click();
 await page.locator("tbody").waitFor();
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

})
