import {test, expect} from "@playwright/test";
import {Login} from "../Pages/Login1Page.js";
import{Board} from "../Pages/CreateBoardPage.js"
let page;
test('Login with email and password', async ({ browser }) => {
    const page = await browser.newPage();
    const loginPage = new Login(page);
    await loginPage.login('likhithapk.1186@gmail.com', 'Bq,f%7N9-46JiKT');
    console.log("Successfully logged in")
});

test('Create a new Board', async ()=>{
    const createBoardPage = new Board(page);
    await createBoardPage.createBoard("Playwright-Automation");
    console.log("Successfully Board created")


})