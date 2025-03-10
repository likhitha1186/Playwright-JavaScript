import { test, expect } from '@playwright/test';

test('Hidden Dropdown', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.setViewportSize({ width: 1920, height: 1040 });
    await page.waitForTimeout(2000);

    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("[type='submit']").click()

    await page.locator("//span[normalize-space()='PIM']").click()

    //click on the dropdown
    await page.locator("//div[@class='oxd-grid-4 orangehrm-full-width-grid']/div[6]/div[1]/div[2]/div[1]/div[1]").click();

    //waitForTimeout for options
    await page.waitForTimeout(2000);

    const options= await page.$$("//div[@role='listbox']//span")
    console.log(options.length)
    await options[5].click()

    for(let option of options){

        const jobTitle = await option.textContent();
         console.log(jobTitle)
        // if(jobTitle.includes('HR Associate')){
        //     await option.click();
        //     break;
        // }
    }
    await page.waitForTimeout(5000);
});
