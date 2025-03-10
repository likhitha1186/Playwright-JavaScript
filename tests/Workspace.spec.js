import { test, expect } from '@playwright/test';
import { Login } from '../Pages/Login1Page.js';
import { Board } from '../Pages/CreateBoardPage.js';
import {
    generateRandomBoardName,
    generateRandomListName,
} from '../HelperFiles/RandomNameGenerator.js';

let page, boardname, listname;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    const loginPage = new Login(page);
    await loginPage.login('likhithapk.1186@gmail.com', 'Bq,f%7N9-46JiKT');
    console.log('Successfully logged in');
    await loginPage.selectWorkspace();
    console.log("Successfully Likhitha's workspace selected");

    const createBoardPage = new Board(page);
    boardname = generateRandomBoardName();
    await createBoardPage.createBoard(boardname);
    console.log('Successfully created: ' + boardname);
});

test('Open a created board', async () => {
    const openBoard = new Board(page);
    await openBoard.findBoardElement(boardname);
    console.log('Opened a ' + boardname);
    await page.waitForTimeout(2000);
});

test('Performing an Action', async () => {
    const addingList = new Board(page);
    listname = generateRandomListName();
    await addingList.addList(listname);
    await page.waitForTimeout(5000);
});
