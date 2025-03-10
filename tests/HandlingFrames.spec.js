import { test, expect } from '@playwright/test';
import { Login } from '../Pages/Login1Page.js';
import { Board } from '../Pages/CreateBoardPage.js';
import {
    generateRandomBoardName, generateRandomCardName,
    generateRandomListName,
} from '../HelperFiles/RandomNameGenerator.js';

let page, boardname, listname, cardname;


test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    const loginPage = new Login(page);
    await loginPage.login('likhithapk.1186@gmail.com', 'Bq,f%7N9-46JiKT');
    console.log('Successfully logged in');
    await loginPage.selectWorkspace();
    console.log("Successfully Likhitha's workspace selected");
});

test('Create a new Board', async () => {
    const createBoardPage = new Board(page);
    boardname = generateRandomBoardName();
    await createBoardPage.createBoard(boardname);
    console.log(`Successfully created  ${boardname} `);
});

test('Open a created board', async () => {
    const openBoard = new Board(page);
    await openBoard.findBoardElement(boardname);
    console.log(`Successfully opened a   ${boardname} `);

    await page.locator("//span[contains(text(), 'Power-Ups')]").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[contains(text(), 'Add Power-Ups')]").click();
    await page.locator("//div[@class='directory-featured-powerups js-featured-power-ups-container']//div[1]//div[1]//div[1]//div[1]//div[1]//button[1]").click()
    await page.waitForTimeout(2000);
});