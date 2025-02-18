import {test, expect, chromium} from "@playwright/test";
import {Login} from '../../Pages/Login1Page.js'


test('handle windows', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 =await context.newPage();
    const page2 =await context.newPage();
    const allPages = context.pages();
    console.log("Number of windows created :" )


});