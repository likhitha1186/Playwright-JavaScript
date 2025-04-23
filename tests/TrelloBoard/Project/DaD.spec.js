import { test, expect } from '@playwright/test';

test('Drag And Drop', async ({ page }) => {
  await page.goto('https://trello.com/homepage');
  // await page.waitForTimeout(5000)
  await page.getByText('Log in').click();
  await page.getByTestId('username').fill('likhithapk.1186@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByTestId('password').fill('Bq,f%7N9-46JiKT');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(5000);
  await page.getByText('Workspaces').click();
  await page.getByText("likhitha's workspace").click();
  await page.waitForTimeout(5000);
  await page.getByLabel('Practice').click();
  await page.waitForTimeout(5000);
  await page
    .locator("//li[@data-testid='list-wrapper'][1]")
    .getByRole('button', { name: 'Add a card' })
    .click();
  await page.getByTestId('list-card-composer-textarea').fill('Cucumber1');
  await page.keyboard.press('Enter');
  const first = await page
    .locator("//li[@data-testid='list-card']").first()
  const second = await page
    .locator("//li[@data-testid='list-wrapper'][2]//button[@data-testid='list-add-card-button']")
  await first.dragTo(second)
  await page.waitForTimeout(5000)
});
