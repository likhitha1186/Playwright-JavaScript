import { test } from '@playwright/test';
import {TemplatesPage} from "../Page/Template_FilesPage.js";
import { LoginPage } from '../Page/Login_FilesPage.js';
let page,templateName;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
  console.log('Successfully logged in as Likhitha');
  await loginPage.selectWorkspace();
  console.log("Successfully Likhitha's workspace selected");
  await loginPage.selectTemplates()
  console.log("Successfully Template-menu selected")
});

test('Select 1-on-1 Meeting Agenda Template ', async ()=>{
  const selectTemp = new TemplatesPage(page);
  templateName = "1-on-1 Meeting Agenda";
  await selectTemp.OneOnOneMeetingAgenda1(templateName);
  console.log("Successfully selected 1-on-1 Meeting Agenda Template");
  await page.waitForTimeout(2000)
})


