import {test, expect} from "@playwright/test";

test('Alert with OK', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.setViewportSize({ width: 1920, height: 1040 });
    await page.waitForTimeout(2000)

    //to write dialogue window handle first we need to enable alert handling by using page
    page.on('dialog', async dialog =>{  // event listener
        expect(dialog.type()).toContain("alert")   //what type alert/dialog it is/ alert type validation
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.locator("//button[@id='alertBtn']").click()
    await page.waitForTimeout(5000)

})
