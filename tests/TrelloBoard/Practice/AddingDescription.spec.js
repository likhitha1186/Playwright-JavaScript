import { test, expect } from '@playwright/test';
import { Loginpage } from '../../../Pages/LoginPage.js';

test('Add Description', async ({ page }) => {
  const login = new Loginpage(page);

  await login.gotoUrl();
  await page.setViewportSize({ width: 1920, height: 1040 });
  await login.getloginbutton1();
  await login.getEmailid('likhithapk.1186@gmail.com');
  await login.getRemberMeCheckbox();
  await login.getcontinuebutton();
  await login.getPassword('Bq,f%7N9-46JiKT');
  await login.getLoginbutton();
  await page.waitForTimeout(1000);
  await page.getByText('Workspaces').click();
  await page.locator('.TaNgu9ncpvX1uL').click();
  await page.waitForTimeout(2000);
  const BoardList = await page.$$("//div[@data-testid='workspace-boards-and-views-lists']//div[3]//li");
  console.log('number of boards items :', BoardList.length);
  await page.getByTestId('templates-menu').click();
  await page.locator('.VSxlmEYC3befsX').nth(1).click();
  await page.getByTestId('create-board-submit-button').click();
  await page.locator("textarea[placeholder='Enter list name…']").fill('Ticket 01');
  await page.waitForTimeout(1000);
  await page.getByTestId('list-composer-add-list-button').click();
  const DoneList = await page.$$("//li[@data-testid='list-wrapper'][2]//li");
  console.log('Number of Done List items : ', DoneList.length);
  await page.locator("//li[@data-testid='list-wrapper'][2]//li").first().click();
  await page.getByText('Add a more detailed description…').click();
  await page.locator("//div[@class='akEditor css-1cx6zwm']//div[@data-testid='click-wrapper']").type('The goal is to ensure the Tech Partner pages are clear.');
  await page.getByTestId('description-save-button').click();
  await page.waitForTimeout(1000);
  await page.getByText('Join').click();
  await page.waitForTimeout(2000)
  await page.getByText('Leave').click()
  await page.waitForTimeout(2000)
  await page.getByTestId('card-back-members-button').click()
  await page.getByPlaceholder('Search members').type('likhitha')
  await page.waitForTimeout(1000)
  await page.getByTestId('choose-member-item-add-member-button').click()
  await page.getByTestId('popover-close').click();
  await page.waitForTimeout(2000)
  await page.getByTestId('card-back-checklist-button').click()
  await page.locator("//button[@class='HwRbvTPVxzo9OE bxgKMAm3lq5BpA SEj5vUdI3VvxDc']").click()
  await page.getByPlaceholder('Add an item').fill('Open')
  await page.getByTestId('check-item-add-button').click();
  await page.waitForTimeout(5000)
  await page.close();
});
