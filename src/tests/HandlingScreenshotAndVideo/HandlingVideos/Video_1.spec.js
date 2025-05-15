import { test, expect } from '@playwright/test';

test.describe('Video', async ()=>{
    test('Page Video', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/ ');
        await page.setViewportSize({ width: 1920, height: 1040 });

        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.waitForTimeout(2000)
//in config file add :     screenshot: "on",
//     video: "on",
    });


    });
