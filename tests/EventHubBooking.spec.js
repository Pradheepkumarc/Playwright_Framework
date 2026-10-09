const{test, expect}=require('@playwright/test')

// test('Event_hub_ticket_booking_account_creation',async({page})=>
// {
// await page.goto('https://eventhub.rahulshettyacademy.com/login');
// await page.locator('[href="/register"]').click();
// console.log(await page.locator('h1').nth(0).textContent());
//  await expect(page.locator('h1').first()).toContainText('Create your account');
// await page.locator('#register-email').fill('playwrightautomation_012@gmail.com');
// await page.locator('#register-password').fill('Test190320@');
// await page.locator('[placeholder="Repeat your password"]').fill('Test190320@');
// await page.locator('#register-btn').click();
// await page.pause();
// });

test('Book Event',async({page})=> 
    {
        const allEvents = await page.locator('[data-testid="event-card"] div[class*="flex"]');
        await page.goto('https://eventhub.rahulshettyacademy.com/login');
await page.locator('#email').fill('playwrightautomation_012@gmail.com');
await page.locator('#password').fill('Test190320@');
await page.locator('#login-btn').click();
await page.getByRole("button",{name:"Admin"}).waitFor();
await page.getByRole("button",{name:"Admin"}).click();
await page.getByRole("link",{name:"Manage Events"}).nth(0).click();
await page.getByText("+ New Event").isVisible();
await page.getByPlaceholder("Event title").fill("Test New Event");
await page.getByPlaceholder("Describe the event…").fill("Event Creation and Booking for testing purpose");
// await page.locator("#category").click();
await page.selectOption("#category",{value:"Sports"});
await page.getByPlaceholder("e.g. Bangalore").fill("Bangalore");
await page.locator('[id="event-date-&-time"]').fill('2026-10-24T14:30');
await page.getByPlaceholder("Venue name & address").fill("Test Location & GOT");
await page.locator('[id="price-($)"]').fill("10000.00");
await page.getByPlaceholder("e.g. 500").fill("600");
await page.getByRole("button",{name:"+ Add Event"}).click();
await page.getByText("Event Created!").isVisible();
await page.getByRole("link",{name:"Home"}).click();
await page.pause();

// await page.locator('[data-testid="event-card"] div[class*="flex"] #book-now-btn').nth(0).click();
// await page.waitForLoadState('networkidle');
// console.log(await page.locator('h1').nth(0).textContent());
// await page.pause();
    });