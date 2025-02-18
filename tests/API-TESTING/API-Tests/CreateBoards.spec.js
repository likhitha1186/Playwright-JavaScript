import {test, expect} from "@playwright/test";
import {createBoards} from "../HelpersFile/Helpers.spec.js"

const { baseURL, name, apiKey, token } = createBoards();

test('Create Trello Board', async ({ request }) => {
    const response = await request.post(
        `${baseURL}/boards/?name=${name}&key=${apiKey}&token=${token}`,
        {
            headers: { Accept: 'application/json' },
        }
    );
    console.log(await response.json());
    expect(response.status()).toBe(200);
});
