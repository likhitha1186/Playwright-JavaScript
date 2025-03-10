import { test, expect } from '@playwright/test';
import { Loginpage } from '../../../Pages/LoginPage.js';

test('LaunchingTrelloBoard', async ({ page }) => {
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
});
