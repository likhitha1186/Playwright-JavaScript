import { test, expect } from '@playwright/test';
import { createBoards } from '../HelpersFile/Helpers.js';
import fs from 'fs';

const { baseURL, BoardName, apiKey, token } = createBoards();
const boardDataFile = './boardData.json';

test.describe.serial('Board CRUD operation', () => {
  test('Create Trello Board', async ({ request }) => {
    const response = await request.post(`${baseURL}/boards/?name=${BoardName}&key=${apiKey}&token=${token}`,
      {
        headers: { Accept: 'application/json' },
      },
    );
    expect(response.status()).toBe(200);
    let res = await response.json();
    const boardName = res.name;
    const boardId = res.id;

    fs.writeFileSync(boardDataFile, JSON.stringify({ boardId, boardName }, null, 2));
    console.log(`Created Board: ${boardId}, ${boardName}`);
  });

  test('Get Trello Board', async ({ request }) => {
    const { boardId } = JSON.parse(fs.readFileSync(boardDataFile, 'utf8'));
    const response = await request.get(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`);
    expect(response.status()).toBe(200);
    console.log('Successfully fetched the Trello Board');
  });

  test('Get Actions of a Board', async ({ request }) => {
    const { boardId } = JSON.parse(fs.readFileSync(boardDataFile, 'utf8'));
    const response = await request.get(`${baseURL}/boards/${boardId}/actions?key=${apiKey}&token=${token}`);
    expect(response.status()).toBe(200);
    console.log('Successfully fetched the Get Actions of Trello Board');
  });

  test('Update a Board', async ({ request }) => {
    const { boardId } = JSON.parse(fs.readFileSync(boardDataFile, 'utf8'));
    const response = await request.put(
      `${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`,
      {
        headers: { 'Content-Type': 'application/json' },
        data: {
          'prefs/background': 'purple',
        },
      },
    );
    expect(response.status()).toBe(200);
    console.log('Successfully Updated the  Board');
  });
});
