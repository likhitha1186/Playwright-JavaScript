import { test, expect } from '@playwright/test';

test('Handling Drop Down', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com');
  await page.setViewportSize({ width: 1920, height: 1040 });
  await page.waitForTimeout(2000);

  // await page.locator('#country').selectOption({label : 'India'}) //passing label
  // await page.locator('#country').selectOption('Canada') // by visible text
  // await page.locator('#country').selectOption({value: 'japan'}) // by value attribute
  //await page.locator('#country').selectOption({index: 1}) // by index

  await page.selectOption("#country", "India") //by calling selectOption from the page Fixtures by text
  await page.waitForTimeout(2000);
});
