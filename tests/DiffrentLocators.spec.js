import{expect, test} from "@playwright/test";
test('Different locators',async({page})=>
{
await page.goto('https://rahulshettyacademy.com/angularpractice/');
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").check();
await page.getByLabel("Gender").selectOption("Male");
await page.getByPlaceholder("Password").fill("TestUser");
//filtering by button name
await page.getByRole("button",{name:'Submit'}).click();
await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout:10_000});
//filtering by button name
await page.getByRole("link",{name:'Shop'}).click();
//filtering by text
await page.locator('app-card').filter({hasText:"Nokia Edge"}).getByRole("button",{name:"Add"}).click();
});