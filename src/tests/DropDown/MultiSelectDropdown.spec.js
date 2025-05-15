import { test, expect } from '@playwright/test';

test('Handling Multi Select Drop Down', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com');
  await page.setViewportSize({ width: 1920, height: 1040 });
  await page.waitForTimeout(2000);

  //1. select multiple options from multi select dropdown
  //await page.selectOption('#colors', ['blue', 'red', 'yellow'])

  //Assertion
  //1. check number of options in the dropdown
  // const options = await page.locator('#colors option');
  // await expect(options).toHaveCount(7);

  //2. check number of options in the dropdown using JS array
  //  const options = await page.$$('#colors option');
  // console.log(options.length); //7
  // await expect(options.length).toBe(7)

  //3. check the presence of value in the dropdown
  const options = await page.locator('#colors').textContent();
  await expect(options.includes('Blue')).toBeTruthy()
  await expect(options.includes('blue')).toBeFalsy()


  await page.waitForTimeout(2000);
});
