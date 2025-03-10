import { test, expect } from '@playwright/test';
import { Login } from '../Pages/Login1Page.js';
import {Board} from "../Pages/CreateBoardPage.js";
import {generateRandomBoardName} from "../HelperFiles/RandomNameGenerator.js";

let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    const loginPage = new Login(page);
    await loginPage.login('likhithapk.1186@gmail.com', 'Bq,f%7N9-46JiKT');
    console.log('Successfully logged in');
    await page.waitForTimeout(5000);
    await loginPage.selectWorkspace();
    console.log("Successfully Likhitha's workspace selected");
});

test('Delete a closed boards', async () => {
    const deleteBoardPage = new Board(page);
    await deleteBoardPage.deleteBoard();
    console.log('Successfully deleted all closed boards');
});
