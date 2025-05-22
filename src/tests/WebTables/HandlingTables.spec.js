import {test, expect} from "@playwright/test";

test('Handling Tables', async ({page})=>{
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
    let tableData = [];

    for (let r = 0; r < await rows.count(); r++) {
        const row = rows.nth(r);
        const totalColumns = row.locator('td');

        let rowData = {}; // Store data in an object format
        for (let c = 0; c < await totalColumns.count() - 1; c++) {
            rowData[`Column ${c + 1}`] = await totalColumns.nth(c).textContent();
            console.log("********", await totalColumns.nth(c).textContent(),"############")
        }

        tableData.push(rowData); // Add row data to the array
    }

    console.table(tableData); //  Now it will print in table format
    await page.waitForTimeout(2000);




    // await matchedRow.locator('input').check()
    // await page.waitForTimeout(5000)
   //
   //  await selectProduct(rows, page, 'Laptop')
   //  await selectProduct(rows, page, 'Tablet ')
   //  await selectProduct(rows, page, 'Smartwatch')
   //
   //  //select multiple products by reusable function
   // async function selectProduct(rows, page, name){
   //      const matchedRow = rows.filter({
   //          has : page.locator('td'),
   //          hasText : name
   //      });
   //      await matchedRow.locator('input').check()
   //  }
   //  await page.waitForTimeout(5000)

})
