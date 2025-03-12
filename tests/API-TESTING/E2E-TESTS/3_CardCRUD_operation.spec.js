import { test, expect } from "@playwright/test";
import { createCards } from "../HelpersFile/Helpers.js";
import fs from "fs";
import { generateRandomFieldName } from "../HelpersFile/GeneratingRandomNames.js";

const { baseURL, CardName, apiKey, token } = createCards();
const boardDataFile = "./boardData.json";
const boardData = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
const { boardId, boardName, listId, listName } = boardData;


console.log("\n### Scenario: Cards CRUD operation ###"); // Scenario Title

test.describe.serial("Cards CRUD operation", () => {
    test("Create a new card", async ({ request }) => {
        console.log("1) Running: Create a new card...");
        const response = await request.post(`${baseURL}/cards?name=${CardName}&idList=${listId}&key=${apiKey}&token=${token}`, {
            headers: { Accept: "application/json" },
        });
        expect(response.status()).toBe(200);
        let res = await response.json();
        const cardId = res.id;
        const cardName = res.name;

        // Update boardData.json with the new Card details
        boardData.cardId = cardId;
        boardData.cardName = cardName;
        fs.writeFileSync(boardDataFile, JSON.stringify(boardData, null, 2));

        console.log(` 1. Created Card: ${cardName} on List: ${listName} (Board: ${boardName})`);
    });

    test("Get a card by its ID", async ({ request }) => {
        console.log("2) Running: Get a card by its ID...");
        const { cardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/cards/${cardId}?key=${apiKey}&token=${token}`);

        expect(response.status()).toBe(200);
        console.log(` 2. Retrieved card with ID: ${cardId}`);
    });

    test("Update a card", async ({ request }) => {
        console.log("3) Running: Update a card...");
        const { cardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.put(`${baseURL}/cards/${cardId}?key=${apiKey}&token=${token}`, {
            headers: { "Content-Type": "application/json" },
            data: {
                "desc": "Updated description at " + new Date().toISOString(),
            },
        });

        expect(response.status()).toBe(200);
        console.log(` 3. Updated card with ID: ${cardId}`);
    });

    test.skip("Delete a Card", async ({ request }) => {
        console.log("4) Skipping: Delete a Card...");
        const { cardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.delete(`${baseURL}/cards/${cardId}?key=${apiKey}&token=${token}`);

        expect(response.status()).toBe(200);
        console.log(` 4. Deleted card with ID: ${cardId}`);
    });

    test("Get a field on a Card", async ({ request }) => {
        console.log("5) Running: Get a field on a Card...");
        const { cardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
        const fieldName = generateRandomFieldName();

        const response = await request.get(`${baseURL}/cards/${cardId}/${fieldName}?key=${apiKey}&token=${token}`);

        expect(response.status()).toBe(200);
        console.log(` 5. Retrieved field '${fieldName}' from card with ID: ${cardId}`);
    });

    test("Get Actions on a Card", async ({ request }) => {
        console.log("6) Running: Get Actions on a Card...");
        const { cardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/cards/${cardId}/actions?key=${apiKey}&token=${token}`);

        expect(response.status()).toBe(200);
        console.log(` 6. Retrieved actions for card with ID: ${cardId}`);
    });

    test("Create Attachment On Card", async ({ request }) => {
        console.log("7) Running: Create Attachment On Card...");
        const { cardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.post(`${baseURL}/cards/${cardId}/attachments?key=${apiKey}&token=${token}`, {
            data: {
                "name": "trello-power-up",
                "mimeType": "text/png",
                "setCover": "false",
                "url": "https://trello.com/c/ccPN1tMZ/8-review-meetings",
            },
        });

        expect(response.status()).toBe(200);
        let res = await response.json();
        boardData.attachmentID = res.id;
        fs.writeFileSync(boardDataFile, JSON.stringify(boardData, null, 2));

        console.log(` 7. Created attachment with ID: ${res.id} on card: ${cardId}`);
    });

    test("Get an Attachment On Card", async ({ request }) => {
        console.log("8) Running: Get an Attachment On Card...");
        const { cardId, attachmentID } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/cards/${cardId}/attachments/${attachmentID}?key=${apiKey}&token=${token}`);

        expect(response.status()).toBe(200);
        console.log(` 8. Retrieved attachment with ID: ${attachmentID} from card: ${cardId}`);
    });

    test("Get the Board the Card is on", async ({ request }) => {
        console.log("9) Running: Get the Board the Card is on...");
        const { cardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/cards/${cardId}/board?key=${apiKey}&token=${token}`);

        expect(response.status()).toBe(200);
        let res = await response.json();
        expect(res.name).toEqual(boardName);
        console.log(` 9. Verified card ${cardId} is on board: ${boardName}`);
    });
});
