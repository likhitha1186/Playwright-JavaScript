import {test, expect, chromium} from "@playwright/test";


test('handle multiple windows', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const allPages = context.pages();

    console.log("number of windows created : ",  allPages.length)

    await page1.goto("https://www.amazon.com/");
    await page1.setViewportSize({ width: 1920, height: 1040 });
    await page2.goto("https://www.flipkart.com/");
    await page2.setViewportSize({ width: 1920, height: 1040 });

    const page1Title  =  await page1.title();
    console.log("Page1: ", page1Title);

    const page2Title  =  await page2.title();
    console.log("Page1: ", page2Title);

    await page1.waitForTimeout(2000);
    await page2.waitForTimeout(2000)
});
