import { test } from '@playwright/test';
import { Login } from '../../../Pages/Login1Page.js'
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
test('Select 1-on-1 Meeting Agenda Template ', async ()=>{
    const selectTemp = new TemplatesPage(page);
    await selectTemp.OneOnOneMeetingAgenda("1-on-1 Meeting Agenda");
    console.log("Successfully selected 1-on-1 Meeting Agenda Template");
    await page.waitForTimeout(2000)
})

test('Add a card in Info list', async ()=>{

})

