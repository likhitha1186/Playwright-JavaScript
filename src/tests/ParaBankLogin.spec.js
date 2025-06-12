import {test,expect} from "@playwright/test";
import {getParaBankCredentials} from "./ParaBankCredential.js";

const creds = getParaBankCredentials(process.env.NODE_ENV || 'dev');

test(`Login ParaBank`, async ({ page }) => {
  await page.goto(creds.url);

  await page.fill('input[name="username"]', creds.username);
  await page.fill('input[name="password"]', creds.password);
  await page.click('input[type="submit"]');

  await page.waitForTimeout(3000)

 // await expect(page.locator('h1')).toHaveText('Accounts Overview');
});
