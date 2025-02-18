import {test, expect} from "@playwright/test";
import {Login} from "../../../Pages/Login1Page.js";
import {createBoards} from "../HelpersFile/Helpers.spec.js"

const { baseURL, name, apiKey, token } = createBoards();
let page, boardId , boardName ;



test.beforeEach(async ({browser})=>{
    page = await browser.newPage()

    const loginPage = new Login(page);
    await loginPage.login('likhithapk.1186@gmail.com', 'Bq,f%7N9-46JiKT');
    console.log("Successfully logged in")
})

test('Create Trello Board', async ({ request }) => {
    const response = await request.post(
        `${baseURL}/boards/?name=${name}&key=${apiKey}&token=${token}`,
        {
            headers: { Accept: 'application/json' },
        }
    );
    expect(response.status()).toBe(200);
    let res = await response.json();
    boardId = res.id;
    boardName= res.name;
    console.log(boardId);
});



