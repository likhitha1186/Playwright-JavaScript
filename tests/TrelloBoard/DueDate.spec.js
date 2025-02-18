import { test, expect } from '@playwright/test';
import { Loginpage } from '../../Pages/LoginPage.js';

test('Adding Due Date', async ({ page }) => {
    const login = new Loginpage(page);

    await login.gotoUrl();
    await page.setViewportSize({ width: 1920, height: 1040 });
    await login.getloginbutton1();
    await login.getEmailid('likhithapk.1186@gmail.com');
    await login.getRemberMeCheckbox();
    await login.getcontinuebutton();
    await login.getPassword('Bq,f%7N9-46JiKT');
    await login.getLoginbutton();
    await page.waitForTimeout(1000);
    await page.getByText('Workspaces').click();
    await page.locator('.TaNgu9ncpvX1uL').click();
    await page.waitForTimeout(2000);
    await page.getByTestId('templates-menu').click();
    await page.locator('.VSxlmEYC3befsX').nth(1).click();
    await page.getByTestId('create-board-submit-button').click();
    await page.waitForTimeout(1000);
    await page.getByTestId('list-composer-add-list-button').click();

    await page.locator("//li[@data-testid='list-wrapper'][2]//li").first().click();
    await page.getByTestId('card-back-due-date-button').click();
    await page.getByTestId('date-range-picker-with-ads').locator('svg').nth(3).uncheck();
    await page.getByTestId('date-range-picker-with-ads').locator('svg').nth(2).check();
    await page.getByRole('button', { name: '2, Sunday February' }).click();
    await page.getByTestId('date-range-picker-with-ads').locator('svg').nth(3).check();
    await page.getByRole('button', { name: '26, Wednesday February' }).click();
    await page.getByTestId('save-date-button').click();
    await page.waitForTimeout(5000)
    await page.close();
});
