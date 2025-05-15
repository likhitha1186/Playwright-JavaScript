import {test, expect} from "@playwright/test";

test('Confirmation Alert with OK and Cancel', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.setViewportSize({ width: 1920, height: 1040 });
    await page.waitForTimeout(2000)

    //enabling dialog window handler
    page.on('dialog', async dialog =>{  // event listener
        expect(dialog.type()).toContain("confirm")
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept() //close by using OK
        //await dialog.dismiss() //close by using Cancel
    })

    await page.locator("//button[@id='confirmBtn']").click()
    await page.waitForTimeout(2000)
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')

})
