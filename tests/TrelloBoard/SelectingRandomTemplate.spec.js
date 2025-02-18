import { test } from '@playwright/test';
import { Loginpage } from '../../Pages/LoginPage.js';

test('Selecting Random Template', async ({ page }) => {
  const login = new Loginpage(page);
  await login.gotoUrl();
  await page.setViewportSize({ width: 1920, height: 1040 });
  await login.getloginbutton1();
  await login.getEmailid('likhithapk.1186@gmail.com');
  await login.getRemberMeCheckbox();
  await login.getcontinuebutton();
  await login.getPassword('Bq,f%7N9-46JiKT');
  await login.getLoginbutton();
  await page.waitForTimeout(5000);
  await page.getByText('Workspaces').click();
  await page.locator('.TaNgu9ncpvX1uL').click();
  await page
      .locator('.VSxlmEYC3befsX').nth(4).click();
  await page.waitForTimeout(5000);
  const templates = await page.$$("//div[@class='atlaskit-portal-container']//li");
  console.log('Number of Templates : ', templates.length);

});
