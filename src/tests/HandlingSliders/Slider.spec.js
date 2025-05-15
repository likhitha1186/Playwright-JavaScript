import { test } from '@playwright/test';

test('handling sliders', async ({ page }) => {
  await page.goto('https://practice.automationtesting.in/');
  await page.waitForTimeout(2000);
  await page.locator('#menu-item-40').click();
  const slider = await page.locator(
    "//div[contains(@class, 'ui-slider')]//span[2]",
  )
  await page.waitForTimeout(2000)
  const initValue = await page.locator("//span[@class='to']")
  const targetPrice = '350';
  let isCompleted = false;
 if(slider) {
   while (!isCompleted) {
   let bb = await slider.boundingBox();
   if (bb) {
       await page.mouse.move(bb.x + bb.width / 2, bb.y + bb.height / 2); //center of locator
       await page.mouse.down();
       await page.mouse.move(bb.x + 20, bb.y + bb.height / 2);
       await page.mouse.up()
     if (initValue !== targetPrice) {
       continue;
     }
     isCompleted = true;
   }
   }
 }
 await page.waitForTimeout(2000)
});
