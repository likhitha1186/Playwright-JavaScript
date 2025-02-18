import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/ ');

  const title = await page.title();
  await expect(page).toHaveTitle('Swag Labs');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(await page.getByText('Swag Labs')).toBeVisible();

});
