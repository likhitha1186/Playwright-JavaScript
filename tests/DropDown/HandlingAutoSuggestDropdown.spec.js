import{test, expect} from '@playwright/test'

test("Auto Suggest Dropdown", async ({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.setViewportSize({ width: 1920, height: 1040 });
    await page.waitForTimeout(2000);

    await page.locator("//input[@id='src']").fill('Bangalore');
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI jTMXri')]//div//text[1]");

    const fromCityOptions = await page.$$("//li[contains(@class,'sc-iwsKbI jTMXri')]//div//text[1]")
    console.log(fromCityOptions.length)
    for(let option of fromCityOptions)
    {
        const value = await option.textContent();
        console.log(value)
        if(value.includes('Tin Factory')){
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(2000)
})