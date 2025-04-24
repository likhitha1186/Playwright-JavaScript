import { test, expect } from '@playwright/test';

test('Select dates and submit form', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator('#start-date').scrollIntoViewIfNeeded();

  const startDate = page.locator('#start-date');
  await startDate.fill('2025-03-15');

  const endDate = page.locator('#end-date');
  await endDate.fill('2025-03-20');

  // Click Submit
  await page.locator('.submit-btn').click();

  await page.waitForTimeout(3000);
});
