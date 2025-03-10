import {test, expect, chromium} from "@playwright/test";
import {Credentials} from "../Env.js";

const credential = Credentials()
test('handle multiple pages', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const allPages = context.pages();

    console.log("number of windows created : ",  allPages.length)

    await page1.goto(credential.url);
    await page1.setViewportSize({ width: 1920, height: 1040 });


    const page1Title  =  await page1.title();
    console.log("Page1: ", page1Title);
    await page1.waitForTimeout(2000);

});
