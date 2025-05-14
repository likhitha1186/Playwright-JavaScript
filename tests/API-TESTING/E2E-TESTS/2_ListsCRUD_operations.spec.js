import { test, expect } from "@playwright/test";
import { createLists } from "../HelpersFile/Helpers.js";
import fs from "fs";

const { baseURL, ListName, apiKey, token } = createLists();
const boardDataFile = "./boardData.json";
const boardData = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
const { boardId, boardName } = boardData;

test.describe.serial("List CRUD operation", () =>{
    test("Create a new List on a Board", async ({ request }) => {
      //  await new Promise(resolve => setTimeout(resolve, 2000)); // Waits for 2 seconds
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
        console.log(`Created List: ${listName} on (Board: ${boardName})`);
    })

    test("Get information about a List", async ({ request }) => {
        const { listId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
        const response = await request.get(`${baseURL}/lists/${listId}?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
    });

    test("Update the properties of a List", async ({ request }) => {
        const { listId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
        const response = await request.put(`${baseURL}/lists/${listId}?key=${apiKey}&token=${token}`,{
            headers: { "Content-Type": "application/json" },
            data: {
                "pos" : "bottom"
            }
        });
        expect(response.status()).toBe(200);
        console.log("Successfully fetched the information about the List");
    });

    test("Get the list information", async ({ request }) => {
        const { listId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
        const response = await request.get(`${baseURL}/lists/${listId}/board?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
        console.log("Successfully fetched the board");
    });

    test("Get the Actions on a List", async ({ request }) => {
        const { listId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
        const response = await request.get(`${baseURL}/lists/${listId}/actions?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
        console.log("Successfully fetched the actions of a list");
    });

    test("List the cards in a list", async ({ request }) => {
        const { listId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));
        const response = await request.get(`${baseURL}/lists/${listId}/cards?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
        console.log("Successfully fetched the cards list");
    });
});
