import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
    await page.goto('http://hrm.sti.com/symfony/web/index.php/auth/login ');
    await page.fill('#txtUsername', 'Likhithap')
    await page.fill('#txtPassword' ,'Deeksh@1186');





})