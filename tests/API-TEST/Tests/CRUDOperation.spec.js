import { test, expect } from "@playwright/test";
import { createBoards } from "../HelpersFile/helpers.js";

const { baseURL, name, apiKey, token } = createBoards();
let boardId, boardName;

test.describe('Board CRUD operation', () => {

  test('Create Trello Board', async ({ request }) => {
    console.log(`Creating board with name: ${name}`);

    const response = await request.post(`${baseURL}/boards/`, {
      headers: { Accept: 'application/json' },
      form: { // ✅ Send parameters as form data
        name: name,
        key: apiKey,
        token: token
      }
    });

    expect(response.status()).toBe(200);  // ✅ Validate response

    let res = await response.json();
    boardId = res.id;
    boardName = res.name;
    console.log(`Board Created: ID = ${boardId}, Name = ${boardName}`);
  });

  test('Get Trello Board', async ({ request }) => {
    console.log(`Fetching board with ID: ${boardId}`);

    const response = await request.get(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`);

    expect(response.status()).toBe(200);  // ✅ Validate response

    let res = await response.json();
    console.log(`Board Details: ${JSON.stringify(res)}`);
  });

});
