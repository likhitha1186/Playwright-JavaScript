import { test, expect } from '@playwright/test';

test('Handling Drop Down using assertion', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com');
  await page.setViewportSize({ width: 1920, height: 1040 });
  await page.waitForTimeout(2000);

  //Assertion:
  //1. check number of options in dropdown
  //   const options = await page.locator("#country option")
  //   await expect(options).toHaveCount(10)


  //2. check number options in dropdown in array format
  // const options = await page.$$('#country option'); //array format
  // console.log('Number of options', options.length); //10
  // await expect(options.length).toBe(10);

  //3. check presence of value in the dropdown
  // const options = await page.locator("#country").textContent()
  // console.log(options)
  // await expect(options.includes('India')).toBeTruthy()

  //4. check presence of value in the dropdown-using looping statement
  // const options = await page.$$('#country option');
  // let status=false;
  // for(const option of options){
  //   let value = await option.textContent()
  //   console.log(value)
  //   if(value.includes('United Kingdom')){
  //     status = true;
  //     break
  //   }
  // }
  // expect(status).toBeTruthy()

  //5. select option from dropdown using loop
  const options = await page.$$('#country option');
  for (const option of options)
  {
    let text = await option.textContent();
    let value = await option.getAttribute('value'); // Get the 'value' attribute
    if (text.includes('United Kingdom'))
    {
      await page.selectOption("#country", value);
      break;
    }
  }
  await page.waitForTimeout(2000);


});
