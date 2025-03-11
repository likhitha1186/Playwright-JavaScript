import {test, expect, chromium} from '@playwright/test'

test('handle multiple window', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/windows');
    const title =await page.title();
    console.log( title )

    // const pagePromise =  context.waitForEvent('page');

    await page.locator("[href*='windows']").click();
    const newPage = await page.context().newPage();
    await newPage.goto("https://the-internet.herokuapp.com/windows/new")

    console.log(newPage.url(), page.url())

    // await expect(newPage).toHaveTitle('New Window');

    //  Promise.all([
    //     await page.locator("[href*='windows']").click(),
    //      await page.waitForLoadState()
    // ])


    await page.bringToFront();
    await page.pause()

})