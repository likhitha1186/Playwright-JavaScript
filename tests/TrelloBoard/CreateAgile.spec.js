import { test, expect } from '@playwright/test';
import { Loginpage } from '../../Pages/LoginPage.js';
import { text } from 'node:stream/consumers';

test('Create Agile Template', async ({ page }) => {
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
  await page.waitForTimeout(2000);
  await page.getByTestId('templates-menu').click();
  await page.waitForTimeout(2000);
  await page
    .locator('.VSxlmEYC3befsX')
    .getByText('Agile Board Template | Trello ')
    .click();
  await page.waitForTimeout(2000);
  await page.getByTestId('create-board-submit-button').click();
  await page.waitForTimeout(2000);
  await page
    .locator("textarea[placeholder='Enter list name…']")
    .fill('Ticket 01');
  await page.waitForTimeout(2000);
  await page.getByTestId('list-composer-add-list-button').click();
  const DoneList = await page.$$("//li[@data-testid='list-wrapper'][2]//li");
  console.log('Number of Done List items : ', DoneList.length);
  await page
    .locator("//li[@data-testid='list-wrapper'][2]//li")
    .first()
    .click();
  await page.locator("//span[@class='wl2C35O7dKV1wx']").click();
  await page.waitForTimeout(2000);
  await page
    .locator(
      "//div[@data-testid='move-card-popover-select-board-destination']//span[@class = 'css-17zzl5o']",
    )
    .click();
  await page.waitForTimeout(2000);
  const options = await page.$$("//div[@role='option']//li");
  console.log('Number of Move card items', options.length);
  for (let option of options) {
    const text = await option.textContent();
    console.log(text);
  }

  await options[1].click();

  await page.getByTestId('move-card-popover-move-button').click();
  await page.waitForTimeout(2000);
});
