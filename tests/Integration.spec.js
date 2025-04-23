import { test } from '@playwright/test';
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
});

test('Adding list to the board', async () => {
    const addingList = new Board(page);
    listname = generateRandomListName();
    await addingList.addList(listname);
    console.log(`Successfully created  ${listname} list`);
});

test('Adding  card to the board', async () => {
    const board = new Board(page);
        cardname = generateRandomCardName();
        await board.addCard(cardname);
        console.log(`Successfully added ${cardname} card`);

});

test('Performing action on Card', async ()=>{
    const openCard = new Board(page);
    await openCard.openCard();
    console.log(`Successfully opened a  ${cardname}  card `);
    await page.waitForTimeout(5000);

})