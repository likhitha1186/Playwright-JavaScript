import {test, expect} from "@playwright/test";

test('Handling Table', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.setViewportSize({ width: 1920, height: 1040 });
    await page.waitForTimeout(2000);

    //capture the table
    const table = await page.locator('#productTable');

    //total number of Rows and Columns
    const columns = await table.locator('thead tr th')
    console.log("Total Columns : ", await columns.count());
    expect(await columns.count()).toBe(4)

    const rows = await table.locator('tbody tr')
    console.log("Total Rows : ", await rows.count());
    expect(await rows.count()).toBe(5)

    //select the checkbox of product-5 - use filter function
    const matchedRow = rows.filter({
        has : page.locator('td'),
        hasText : 'Television'
    })
    const allPages = await page.locator(".pagination li a")
    console.log("Number of pages in the table : ", await allPages.count());

    for(let p=0; p<await allPages.count(); p++)
    {
        if(p>0){
            await allPages.nth(p).click()
        }
        for(let r=0; r< await rows.count(); r++)
        {
            const row = rows.nth(r);
            const totalColumn =row.locator('td')
            for(let c=0; c<await totalColumn.count()-1; c++)
            {
              const data =  await totalColumn.nth(c).textContent()
                if(data.includes('Television')){
                    await matchedRow.locator('input').check()
                    await page.waitForTimeout(2000)
                    return
                }
            }
            await page.waitForTimeout(2000)
        }

    }

})
