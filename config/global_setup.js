import { chromium, expect } from '@playwright/test';

export default async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.setViewportSize({ width: 1920, height: 1040 });

    await page.fill("//input[@placeholder='Username']", 'Admin');
    await page.fill("//input[@placeholder='Password']", 'admin123');
    await page.click("//button[normalize-space()='Login']");


    const dashboard = await page.locator('//h6');
    await expect(dashboard).toHaveText("Dashboard");

    // Save the storage state (cookies, localStorage, etc.)
    await page.context().storageState({ path: 'user.json' });
    await browser.close();
};
