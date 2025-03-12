import {expect, test} from '@playwright/test';

test.describe("Authentication",  ()=>{
    test('Authentication Orange HRM', async ({browser})=>{

        const context = await browser.newContext({storageState: "user.json"});

        const page = await context.newPage()
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ');
        // await page.click('#login-button');
        const dashboard = await page.locator('//h6')
        await expect(dashboard).toHaveText("Dashboard")
        await page.waitForTimeout(2000)
    })
});