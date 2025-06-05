import { test } from '@playwright/test';
import {TemplatesPage} from "../Page/Template_FilesPage.js";
import {OneOnOneMeetingAgendaTemplate} from "../Page/OneOnOneMeetingAgendaPage.js";
import {generateRandomCardName, generateRandomLabelName} from "../FeatureFiles/RandomName.js"
import { LoginPage } from '../Page/Login_FilesPage.js';
import { LogoutPage } from '../Page/Logout_FilesPage.js';

let page, cardname,templateName;

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
    await selectTemp.OneOnOneMeetingAgenda(templateName);
    console.log("Successfully selected 1-on-1 Meeting Agenda Template");
    await page.waitForTimeout(2000)
})

test('Add a card in Info list', async () => {
    const actions = new OneOnOneMeetingAgendaTemplate(page);
    cardname = generateRandomCardName();
    await actions.addCardToInfoTopics(cardname);
    console.log(`Successfully added a ${cardname} to the Info list`);

    const labelName = generateRandomLabelName()
    const addChecklistItems= [" Task 1 ", " Task 2 ", " Task 3 "];
    await actions.performActionOnNewCard(cardname,labelName, addChecklistItems);
    console.log(`Successfully found and clicked the card: ${cardname}`);
    console.log(`Successfully added ${labelName} to the: ${cardname}`);
    console.log(`Successfully added ${addChecklistItems} to the  ${cardname}`);
    await actions.closeOpenedCard()
    await page.waitForTimeout(1000);

});

test('Click existing card', async () => {
    const actions = new OneOnOneMeetingAgendaTemplate(page);
    const cardIndex=0;
    await actions.performActionOnOldCard(cardIndex);
    console.log(`Successfully clicked the card: ${cardname}`);
    console.log(`Successfully performed specified actions on : ${cardname}`);
});

test.afterAll(async ({ browser }) => {
     const deleteAction= new OneOnOneMeetingAgendaTemplate(page);
     await deleteAction.deleteCreatedBoard(templateName);
     console.log(`Successfully deleted ${templateName}`);

     const logout= new LogoutPage(page);
     await logout.logout();
     console.log(`Successfully logged out`);
});