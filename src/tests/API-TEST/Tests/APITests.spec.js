import { test, expect } from '@playwright/test';
var boardId;

test('Get Boards', async ({ request }) => {
  const response = await request.get(
    'https://api.trello.com/1/boards/67a0eeb8960eab976e50d5b1?key=e7175a31b7a4e182504359ca0f540c48&token=ATTA944ced0cdb9c816826ce5503e821c8422e96302239861925aea7d2a2beb2cd0779409DCD',
  );
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test('Create Boards', async ({ request }) => {
  const response = await request.post(
    'https://api.trello.com/1/boards/?name=Automation&key=e7175a31b7a4e182504359ca0f540c48&token=ATTA944ced0cdb9c816826ce5503e821c8422e96302239861925aea7d2a2beb2cd0779409DCD',
    {
      data: { name: 'Automation' },
      headers: { Accept: 'application/json' },
    },
  );
  console.log(await response.json());
  expect(response.status()).toBe(200);

  let res = await response.json();
  boardId = res.id;

});

test('Update Boards', async ({ request }) => {});

test('Delete Boards', async ({ request }) => {

  const response = await request.delete("https://api.trello.com/1/boards/67a0eeb8960eab976e50d5b1?key=e7175a31b7a4e182504359ca0f540c48&token=ATTA944ced0cdb9c816826ce5503e821c8422e96302239861925aea7d2a2beb2cd0779409DCD")
  expect(response.status()).toBe(429)
});
