import { test, expect } from "@playwright/test";
import { createBoards } from "../HelpersFile/Helpers.js";
import fs from "fs";

const { baseURL, BoardName, apiKey, token } = createBoards();
const boardDataFile = "./boardData.json";

test.describe.only("Board CRUD operation", () => {
    test("Create Trello Board", async ({ request }) => {
        const response = await request.post(`${baseURL}/boards/?name=${BoardName}&key=${apiKey}&token=${token}`, {
            headers: { Accept: "application/json" },
        });

        expect(response.status()).toBe(200);
        let res = await response.json();
        const boardId = res.id;
        const boardName = res.name;

        fs.writeFileSync(boardDataFile, JSON.stringify({ boardId, boardName }, null, 2));

        console.log(`Created Board: ${boardId}, ${boardName}`);
    });

    test("Get Trello Board", async ({ request }) => {
        const { boardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });

    test("Get Actions of a Board", async ({ request }) => {
        const { boardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.get(`${baseURL}/boards/${boardId}/actions?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
      console.log(await response.json());
    });

    test("Update a Board", async ({ request }) => {
        const { boardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.put(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`, {
            headers: { "Content-Type": "application/json" },
            data: {
                "prefs/background": "purple"
            }
        });
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });

    test.skip("Delete a Board", async ({ request }) => {
        const { boardId } = JSON.parse(fs.readFileSync(boardDataFile, "utf8"));

        const response = await request.delete(`${baseURL}/boards/${boardId}?key=${apiKey}&token=${token}`);
        expect(response.status()).toBe(200);
        console.log("Deleted Board: " + boardId);
    });
});
