import { test, expect } from '@playwright/test';

test.describe('Screenshot', async ()=>{
    test('Page screenshot', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/ ');
        await page.setViewportSize({ width: 1920, height: 1040 });

        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.waitForTimeout(2000)

        await page.screenshot({path: 'tests/screenshot/'+Date.now()+'HomePage.png'})

    });

    test('Full Page screenshot', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/ ');
        await page.setViewportSize({ width: 1920, height: 1040 });

        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.waitForTimeout(2000)

        await page.screenshot({path: 'tests/screenshot/'+Date.now()+'FullPage.png', fullPage: true})

    });
    test('Particular Element screenshot', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/ ');
        await page.setViewportSize({ width: 1920, height: 1040 });

        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.waitForTimeout(2000)

        await page.locator("//div[@class='inventory_list' ]/div[1]").screenshot({path: 'tests/screenshot/'+Date.now()+'BackPack.png', fullPage: true})
    });
})

