import { test } from '@playwright/test';
import { Login } from '../../../../../Pages/Login1Page.js'
import {TemplatesPage} from "../Page/Template_FilesPage.js";

let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    const loginPage = new Login(page);
    await loginPage.login('likhithapk.1186@gmail.com', 'Bq,f%7N9-46JiKT');
    console.log('Successfully logged in');
    await page.waitForTimeout(5000);
    await loginPage.selectWorkspace();
    console.log("Successfully Likhitha's workspace selected");
    await loginPage.selectTemplates()
    console.log("Successfully Template-menu selected")
});
test('select Teaching Weekly Planning Template ', async ()=>{
    const selectTemp = new TemplatesPage(page);
    await selectTemp.TeachingWeeklyPlanning("Teaching: Weekly Planning");
    console.log("Successfully selected Teaching Weekly Planning Template");
})

