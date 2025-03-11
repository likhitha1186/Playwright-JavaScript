import { test } from '@playwright/test';
import { Login } from '../../../../Pages/Login1Page.js'
import {TemplatesPage} from "../Page/Template_FilesPage.js";
import {OneOnOneMeetingAgendaTemplate} from "../Page/OneOnOneMeetingAgendaPage.js";
import {generateRandomCardName, generateRandomLabelName} from "../FeatureFiles/RandomName.js"

let page, cardname;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    const loginPage = new Login(page);
    await loginPage.login('likhithapk.1186@gmail.com', 'Bq,f%7N9-46JiKT');
    console.log('Successfully logged in as Likhitha');
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

test('Add a card in Info list', async () => {
    const actions = new OneOnOneMeetingAgendaTemplate(page);
    cardname = generateRandomCardName();
    await actions.addCardToInfoTopics(cardname);
    console.log(`Successfully added a ${cardname} to the Info list`);

    const labelName = generateRandomLabelName()
    const addChecklistItems= ["Task 1", "Task 2", "Task 3"];
    await actions.performActionOnNewCard(cardname,labelName, addChecklistItems);
    console.log(`Successfully found and clicked the card: ${cardname}`);
    console.log(`Successfully added ${labelName} to the: ${cardname}`);
    console.log(`Successfully added ${addChecklistItems} to the  ${cardname}`);
    await page.waitForTimeout(1000);

});

test('Click existing card', async () => {
    const actions = new OneOnOneMeetingAgendaTemplate(page);
    const cardIndex=0;
    await actions.performActionOnOldCard(cardIndex);
    console.log(`Successfully clicked the card: ${cardname}`);
    console.log(`Successfully performed specified actions on : ${cardname}`);
});

