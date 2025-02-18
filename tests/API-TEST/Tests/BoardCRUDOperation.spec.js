import { test, expect, request } from '@playwright/test';
import { getTrelloParams } from '../HelperFiles/helpers.spec.js';

const { baseURL, name, apiKey, token } = getTrelloParams();

test.describe.serial('Trello Board Tests', () => {
  let boardId, boardName;

  test('Create Board', async ({ request }) => {
    const PostResponse = await request.post(`${baseURL}/boards/?name=${name}&key=${apiKey}&token=${token}`,
      {
        headers: { Accept: 'application/json' },
      },
    );
    expect(PostResponse.status()).toBe(200);
    let res = await PostResponse.json();
    boardId = res.id;
    boardName = res.name;
    console.log('Created Board ID:', boardId);
    console.log('Created Board Name:', boardName);
  });

  test('Get Board', async ({ request }) => {
    const GetResponse = await request.get(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`);
    expect(GetResponse.status()).toBe(200);

    let res1 = await GetResponse.json();
    expect(res1.id).toBe(boardId);
    expect(res1.name).toBe(boardName);
    console.log('Retrieved Board ID:', res1.id);
    console.log('Retrieved Board Name:', res1.name);
  });
});
