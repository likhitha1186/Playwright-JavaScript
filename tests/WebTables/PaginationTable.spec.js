import {test, expect} from "@playwright/test";

test('Handling Pagination Tables', async ({page})=>{
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

   //print all product details using loop
   //  for(let r=0; r< await rows.count(); r++)
   //  {
   //      const row = rows.nth(r);
   //      const totalColumn =row.locator('td')
   //      for(let c=0; c<await totalColumn.count()-1; c++)
   //      {
   //          console.log(await totalColumn.nth(c).textContent())
   //      }
   //  }


    //read the data from all the pages in the table
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
                 console.table(await totalColumn.nth(c).textContent())
             }
             await page.waitForTimeout(2000)
         }
        await page.waitForTimeout(2000)
    }


    await page.waitForTimeout(5000)

})
