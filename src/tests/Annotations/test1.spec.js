import { test, expect } from '@playwright/test';

test('Playwright Annotations', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/ ');
  await page.waitForTimeout(1000);

  await expect(page).toHaveTitle('Swag Labs');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.waitForTimeout(1000);
});

test.skip('skip() - Annotations', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/ ');
  await page.waitForTimeout(1000);

  await expect(page).toHaveTitle('Swag Labs');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.waitForTimeout(1000);
});

test.skip('Annotations', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/ ');
  await page.waitForTimeout(1000);

  await expect(page).toHaveTitle('Swag Labs');

  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.waitForTimeout(1000);

  await page.click('#add-to-cart-sauce-labs-backpack');
});

test.fail('fail() - Annotations', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/ ');
  await page.waitForTimeout(1000);

  await expect(page).toHaveTitle('Swag Labs');

  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.waitForTimeout(1000);

  await expect(page).toHaveTitle('Products');
});

test("fixme() - Annotations", async ({ page }) => {
  test.fixme('This test is flaky and needs fixing');

  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');

  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.waitForTimeout(1000);

  await page.click('#add-to-cart-sauce-labs-backpack');
})