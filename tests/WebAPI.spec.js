const{test,expect,request}=require('@playwright/test');
const payLoad = {"userEmail":"playwrightautomation_012@gmail.com","userPassword":"Test190320"};

test.beforeAll(async() =>
{
    const apiContext = await request.newContext();
    const loginResponse=await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{body:payLoad});
expect (loginResponse.ok()).toBeTruthy();
const resposeValue = await loginResponse.json()
const token = resposeValue.token();
console(token)

})
test("Place Order",async({page})=>
{
page.addInitScript(value=>
{
    window.localStorage.setItem('token',value);
},token);
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
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
})
