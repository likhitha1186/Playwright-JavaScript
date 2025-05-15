import { test, expect } from '@playwright/test';

test('SoftAssertion', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  await expect(page).toHaveTitle('STORE');
  await expect(page).toHaveURL('https://demoblaze.com/index.html');

});
