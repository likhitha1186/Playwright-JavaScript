import { test, expect } from '@playwright/test';

test('handle multiple window', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/windows');
  const title = await page.title();
  console.log(title);

  const pagePromise = context.waitForEvent('page');

  await page.locator("[href*='windows']").click();
  const newPage = await pagePromise;
  await expect(newPage).toHaveTitle('New Window');

  await page.bringToFront();
  await page.waitForTimeout(3000);
});
