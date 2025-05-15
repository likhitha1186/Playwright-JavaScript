import { test, expect } from '@playwright/test';

test('Launch TrelloBoard', async ({ page }) => {
  await page.goto('https://trello.com/homepage');
  // await page.waitForTimeout(5000)
  await page.getByText('Log in').click();
  await page.getByTestId('username').fill('likhithapk.1186@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByTestId('password').fill('Bq,f%7N9-46JiKT');
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.waitForTimeout(5000)
});
