import { test } from '@playwright/test';

test('LocatingMultipleElements', async ({ page }) => {
  await page.goto('https://trello.com/homepage ');
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
  const ToDoList = await page.$$('//li[@data-testid="list-wrapper"][1] //li');
  console.log('Number of ToDo items:', ToDoList.length);

  if (ToDoList.length > 1) {
    const first = page.locator('//li[@data-testid="list-wrapper"][1] //li').first();
    const second  = await page.locator('//li[@data-testid="list-wrapper"][2]',);
    await first.dragTo(second)
  }
});
