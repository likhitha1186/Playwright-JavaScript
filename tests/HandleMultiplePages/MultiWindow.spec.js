import {test, expect} from "@playwright/test";

test('handling multi windows', async ({browser})=>{
    const context = await browser.newContext(); //Creates an isolated session (browser context)

    const page = await context.newPage();  //Creates a new page (tab) inside the context.
    await page.goto('https://toolsqa.com/automation-practice-switch-windows/');
    console.log("page 1 : ",await page.title());

    const pagePromise = context.waitForEvent('page');
    await page.locator("[class='btn btn-primary-shadow btn-block']").click();
    const newPage = await pagePromise;
    console.log("page 2 : ",await newPage.title());


})

//browser.newPage() shares the same context with other pages.
// context.newPage() ensures each test runs in an isolated environment.