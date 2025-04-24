import { test } from '@playwright/test';
import { Login } from './Login1Page-Cookies.js';

test('Handle cookies', async ({ browser }) => {
  const context = await browser.newContext(); // Create a new browser context
  const page = await context.newPage(); // Create a new page

  const loginPage = new Login(page);
  await loginPage.login('likhithapk.1186@gmail.com', 'Bq,f%7N9-46JiKT');
  console.log('Successfully logged in as Likhitha');
  await loginPage.selectWorkspace();
  await page.waitForTimeout(2000);
  console.log("Successfully Likhitha's workspace selected");

  await page.click('button:has-text("Accept all")');
  console.log('Cookies accepted!');

  let getCookies = await context.cookies();
  console.log('Cookies before clearing:', getCookies);

  await context.clearCookies();
  console.log('Cookies deleted!');

  getCookies = await context.cookies();
  console.log('Cookies after clearing:', getCookies);
});
