import {test, expect} from "@playwright/test";

test('Prompt Alert ', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.setViewportSize({ width: 1920, height: 1040 });
    await page.waitForTimeout(2000)

    //enabling dialog window handler
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain("prompt")
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Likhitha')
    })

    await page.locator("//button[@id='promptBtn']").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Likhitha! How are you today?')
    await page.waitForTimeout(5000)
})
