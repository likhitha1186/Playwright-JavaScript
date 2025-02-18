import { test } from '@playwright/test';

test('Date Picker', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  //  await page.fill('#datepicker', '03/05/2025')
  //datepicker
  const year = "2025",
    month = "May",
    date = "19";
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
  }
  const dates= await page.$$("//a[@class='ui-state-default']");
  for(const dt of dates){
    if(await dt.textContent() == date){
      await dt.click()
      break;
    }
  }

  await page.waitForTimeout(5000);
});
