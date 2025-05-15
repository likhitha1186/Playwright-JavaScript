import { test, expect } from '@playwright/test';

test('Practice', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/ ');

  const title = await page.title();
  await expect(page).toHaveTitle('Swag Labs');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(await page.getByText('Swag Labs')).toBeVisible();

  //adding product to the cart
  //await page.getByText('Sauce Labs Backpack').click();
  await page.click( '#add-to-cart-sauce-labs-backpack' );
});
