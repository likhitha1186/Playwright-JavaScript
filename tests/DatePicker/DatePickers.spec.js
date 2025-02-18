import { test } from '@playwright/test';

test('Date Picker', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  //  await page.fill('#datepicker', '03/05/2025')
  //datepicker
  const year = '2026',
    month = 'May',
    date = '19';
  await page.click('#datepicker');
  while (true) {
    const currentYear = await page.locator('.ui-datepicker-year').textContent();
    const currentMonth = await page
      .locator('.ui-datepicker-month')
      .textContent();
    if (currentYear == year && currentMonth == month) {
      break;
    }
    await page.locator("[title='Next']").click(); //next button
    // await page.locator("[title='Prev']").click(); previous button
  }
  // const dates = await page.$$("//a[@class='ui-state-default']");
  await page.click(`//a[@class='ui-state-default'][text() ='${date}']`);

  await page.waitForTimeout(5000);
});
