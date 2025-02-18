import { test, expect } from '@playwright/test';

test('Performing Actions on TrelloBoard', async ({ page }) => {
  await page.goto('https://trello.com/homepage');
  // await page.waitForTimeout(5000)
  await page.getByText('Log in').click();
  await page.getByTestId('username').fill('likhithapk.1186@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByTestId('password').fill('Bq,f%7N9-46JiKT');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(5000);
  await page.getByText('Workspaces').click();
  await page.locator('.TaNgu9ncpvX1uL').click();
  await page.waitForTimeout(5000);
  await page.getByLabel('Practice').click();
  await page.waitForTimeout(5000);
  // await page.locator('li').filter({ hasText : 'To DoAdd a card'}).getByTestId('list-add-card-button').click()
  await page.locator("//li[@data-testid='list-wrapper'][1]").getByRole("button",{name:"Add a card"}).click();
  await page.waitForTimeout(5000)
  await page.getByTestId('list-card-composer-textarea').fill('data 1');
  await page.keyboard.press('Enter');


});
