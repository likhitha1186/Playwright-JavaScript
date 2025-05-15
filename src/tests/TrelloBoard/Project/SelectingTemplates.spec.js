import { test, expect } from '@playwright/test';

test('Selecting Templates', async ({ page }) => {
    await page.goto('https://trello.com/homepage');
    await page.setViewportSize({ width: 1920, height: 1040 });
    await page.getByText('Log in').click();
    await page.getByTestId('username').fill('likhithapk.1186@gmail.com');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByTestId('password').fill('Bq,f%7N9-46JiKT');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(5000);
    await page.getByText('Workspaces').click();
    await page.locator('.TaNgu9ncpvX1uL').click();
    await page.waitForTimeout(5000);
    await page.getByText('Templates').click();
    await page
        .locator('.VSxlmEYC3befsX').nth(0).click()
    await page.getByTestId('create-board-submit-button').click();
    await page.waitForTimeout(5000);
});

