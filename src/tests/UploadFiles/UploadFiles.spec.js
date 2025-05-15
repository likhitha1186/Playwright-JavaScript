import { test, expect } from '@playwright/test';

test('Uploading files', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByText('Upload Files').scrollIntoViewIfNeeded()
  await page.locator('#singleFileInput').click();
  await page.waitForTimeout(2000)
  await page.locator('#singleFileInput').setInputFiles('C:/Users/likhithap/Documents/updatedoffercopy.txt');
  await page.waitForTimeout(2000)
  await page.getByRole('button', { name: 'Upload Single File' }).click();
  await page.waitForTimeout(2000)
});