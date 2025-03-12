import { test, expect } from "@playwright/test";
import { createLists } from "../HelpersFile/Helpers.js";
import fs from "fs";

const { baseURL, ListName, apiKey, token } = createLists();
const boardDataFile = "./boardData.json";
const boardData = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
const { boardId, boardName } = boardData;

console.log("\n### Scenario: List CRUD operation ###"); // Scenario Title

test.describe.serial("List CRUD operation", () => {
    test("Create a new List on a Board", async ({ request }) => {
        console.log("1) Running: Create a new List on a Board...");
        const response = await request.post(`${baseURL}/lists?name=${ListName}&idBoard=${boardId}&key=${apiKey}&token=${token}`, {
            headers: { Accept: "application/json" },
        });
        expect(response.status()).toBe(200);
        let res = await response.json();
        const listId = res.id;
        const listName = res.name;

        // Update boardData.json with the new List details
        boardData.listId = listId;
        boardData.listName = listName;
        fs.writeFileSync(boardDataFile, JSON.stringify(boardData, null, 2));

        console.log(`1. Created List: ${listName} (ID: ${listId}) on Board: ${boardName} (ID: ${boardId})`);
    });

    test("Get information about a List", async ({ request }) => {
        console.log("2) Running: Get information about a List...");
        const { listId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/lists/${listId}?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
        console.log(` 2. Retrieved List details`);
    });

    test("Update the properties of a List", async ({ request }) => {
        console.log("3) Running: Update the properties of a List...");
        const { listId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.put(`${baseURL}/lists/${listId}?key=${apiKey}&token=${token}`, {
            headers: { "Content-Type": "application/json" },
            data: { "pos": "bottom" }
        });

        expect(response.status()).toBe(200);
        console.log(` 3. Updated List position to bottom`);
    });

    test("Get the board a list is on", async ({ request }) => {
        console.log("4) Running: Get the board a list is on...");
        const { listId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/lists/${listId}/board?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
        console.log(` 4. Retrieved board details for the List`);
    });

    test("Get the Actions on a List", async ({ request }) => {
        console.log("5) Running: Get the Actions on a List...");
        const { listId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/lists/${listId}/actions?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
        console.log(` 5. Retrieved List actions`);
    });

    test("List the cards in a list", async ({ request }) => {
        console.log("6) Running: List the cards in a list...");
        const { listId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/lists/${listId}/cards?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
        console.log(` 6. Retrieved all cards in the List`);
    });
});
