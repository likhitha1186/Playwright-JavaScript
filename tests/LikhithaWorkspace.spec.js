import { test } from '@playwright/test';
import { Login } from '../Pages/Login1Page.js';
import { Board } from '../Pages/CreateBoardPage.js';
import {
  generateRandomBoardName, generateRandomCardName,
  generateRandomListName,
} from '../HelperFiles/RandomNameGenerator.spec.js';

let page, boardname, listname, cardname ;
let cardNames = [];

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  const loginPage = new Login(page);
  await loginPage.login('likhithapk.1186@gmail.com', 'Bq,f%7N9-46JiKT');
  console.log('Successfully logged in');
  await page.waitForTimeout(5000);
  await loginPage.selectWorkspace();
  console.log("Successfully Likhitha's workspace selected");
});

test('Create a new Board', async () => {
  const createBoardPage = new Board(page);
  boardname = generateRandomBoardName();
  await createBoardPage.createBoard(boardname);
  console.log(`Successfully created  ${boardname} board `);
});
test('Count a board', async ()=>{
  const countBoards = new Board(page)
  const counts =await countBoards.countBoard()
  console.log('number of boards items :', counts.length);


})

test('Open a created board', async () => {
  const openBoard = new Board(page);
  await openBoard.findBoardElement(boardname);
  console.log(`Successfully opened a   ${boardname}  board`);
});

test('Adding list to the board', async () => {
  const addingList = new Board(page);
  listname = generateRandomListName();
  await addingList.addList(listname);
  console.log(`Successfully created  ${listname} list`);
});

test('Adding multiple cards to the board', async () => {
  const board = new Board(page);
  const numberOfCards = 4;

  for (let i = 1; i <= numberOfCards; i++) {
     cardname = generateRandomCardName();
    await board.addCard(cardname);
    cardNames.push(cardname);
    console.log(`Successfully added ${cardname} card`);
    await page.waitForTimeout(1000);
  }
});

test('Open a  card' , async ()=>{
  const opencard= new Board(page)
  await opencard.openCard(cardNames[0]);
  console.log(`Successfully opened a ${cardNames[0]} card`);

})

test('Perform actions on a card', async ()=>{
  const performaction = new Board(page)
  await performaction.performAction(cardNames[0]);
  console.log(`Successfully performed action on ${cardNames[0]} card`);

})
