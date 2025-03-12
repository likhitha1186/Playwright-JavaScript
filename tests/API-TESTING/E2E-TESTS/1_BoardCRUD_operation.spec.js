import { test, expect } from "@playwright/test";
import { createBoards } from "../HelpersFile/Helpers.js";
import fs from "fs";

const { baseURL, BoardName, apiKey, token } = createBoards();
const boardDataFile = "./boardData.json";

console.log("\n### Scenario: Board CRUD operation ###"); 
test.describe.serial("Board CRUD operation", () => {
    test("Create Trello Board", async ({ request }) => {
        console.log("1) Running: Create Trello Board...");
        const response = await request.post(`${baseURL}/boards/?name=${BoardName}&key=${apiKey}&token=${token}`, {
            headers: { Accept: "application/json" },
        });

        expect(response.status()).toBe(200);
        let res = await response.json();
        const boardId = res.id;
        const boardName = res.name;

        fs.writeFileSync(boardDataFile, JSON.stringify({ boardId, boardName }, null, 2));

        console.log(` 1. Create Trello Board`);
    });

    test("Get Trello Board", async ({ request }) => {
        console.log("2) Running: Get Trello Board...");
        const { boardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);

        console.log(` 2. Get Trello Board`);

    });

    test("Get Actions of a Board", async ({ request }) => {
        console.log("3) Running: Get Actions of a Board...");
        const { boardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/boards/${boardId}/actions?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
        console.log(` 3. Get Actions of a Board`);


    });

    test("Update a Board", async ({ request }) => {
        console.log("4) Running: Update a Board...");
        const { boardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.put(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`, {
            headers: { "Content-Type": "application/json" },
            data: {
                "prefs/background": "purple"
            }
        });
        expect(response.status()).toBe(200);
        console.log(` 4. Update a Board`);


    });
});
